(function () {
  var CFG = window.APP_CONFIG || {};

  // ---------- Players de vídeo ----------
  function buildPlayer(box) {
    var item = (CFG.videos || {})[box.dataset.video] || {};
    var url = (item.src || "").trim();
    var poster = item.poster || "";

    if (!url) {
      box.innerHTML = '<div class="ph"' + (poster ? ' style="background-image:url(' + poster + ')"' : '') +
        '><div><span class="play"></span><p>O vídeo será liberado aqui</p></div></div>';
      return;
    }

    var m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
    if (m) {
      box.innerHTML = '<iframe src="https://www.youtube.com/embed/' + m[1] +
        '?rel=0" title="Vídeo" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
      return;
    }

    m = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([a-z0-9]+))?/i);
    if (m) {
      box.innerHTML = '<iframe src="https://player.vimeo.com/video/' + m[1] + (m[2] ? '?h=' + m[2] : '') +
        '" title="Vídeo" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>';
      return;
    }

    box.innerHTML = '<video controls playsinline preload="metadata"' + (poster ? ' poster="' + poster + '"' : '') +
      '><source src="' + url + '" type="video/mp4"></video>';
  }
  document.querySelectorAll('.video').forEach(buildPlayer);

  // ---------- Envio do formulário ----------
  var form = document.getElementById('activityForm');
  var btn = document.getElementById('submitBtn');
  var statusBox = document.getElementById('statusBox');
  var formScreen = document.getElementById('formScreen');
  var successScreen = document.getElementById('successScreen');

  function showError(msg) {
    statusBox.className = 'status err';
    statusBox.textContent = msg;
    btn.disabled = false;
    btn.textContent = 'Enviar avaliação';
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = 'Enviando...';
    statusBox.className = 'status';
    statusBox.textContent = '';

    try {
      var res = await fetch(CFG.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });

      if (res.ok) {
        formScreen.style.display = 'none';
        successScreen.classList.add('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        var json = await res.json().catch(function () { return null; });
        showError(json && json.errors
          ? json.errors.map(function (x) { return x.message; }).join(', ')
          : 'Não foi possível enviar. Tenta de novo em alguns segundos.');
      }
    } catch (err) {
      showError('Erro de conexão. Verifica a internet e tenta de novo.');
    }
  });
})();
