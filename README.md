# Formando Laterais · Avaliação do Atleta

Página de avaliação do Formando Laterais (Base de Campeão x Insight Analysis).
O atleta assiste a 3 vídeos, responde com texto livre e as respostas chegam no painel do Formspree.

Site estático: HTML, CSS e JavaScript puros. Sem build e sem dependências.
**Todos os arquivos ficam na raiz, sem subpastas.**

## Arquivos

| Arquivo | Função |
|---|---|
| `index.html` | página única |
| `style.css` | visual da página |
| `config.js` | endpoint do Formspree e vídeos (o arquivo que você edita) |
| `main.js` | players de vídeo e envio do formulário |
| `logo-base-de-campeao.png`, `logo-insight-analysis.png`, `favicon.png` | marca |
| `poster-1x1-defendendo.jpg`, `poster-gols-sofridos.jpg`, `poster-cruzamento.jpg` | capa de cada vídeo |
| `1x1-defendendo.mp4`, `gols-sofridos.mp4`, `cruzamento.mp4` | vídeos |
| `vercel.json` | cabeçalhos da Vercel (esconde a página do Google) |

## O que você pode precisar editar

Tudo fica em `config.js`.

**Trocar o endpoint do Formspree**
Altere `formspreeEndpoint` para `https://formspree.io/f/SEU_ID`.

**Trocar um vídeo**
Em `videos`, altere o `src` do bloco. Aceita:
- arquivo da raiz (`nome.mp4`)
- link do YouTube, público ou não listado
- link do Vimeo
- link direto de um `.mp4` hospedado fora

**Alterar perguntas ou textos**
Edite o `index.html`. Cada campo tem um atributo `name`.
É esse nome que aparece como título da resposta no painel do Formspree.

## Subir no GitHub (pelo site, sem pastas)

1. Crie um repositório novo em github.com (por exemplo `formando-laterais-avaliacao`).
2. Clique em **uploading an existing file** (ou **Add file > Upload files**).
3. Arraste **os arquivos** (não o zip) para a página. Como não há subpastas, todos entram de uma vez.
4. Clique em **Commit changes**.

Limite do upload pelo site: **25 MB por arquivo**.
Os vídeos deste projeto foram comprimidos para ficar abaixo disso.
Se trocar por um vídeo maior, use o link do YouTube no `config.js`.

## Publicar na Vercel

1. Em vercel.com, clique em **Add New > Project** e importe o repositório.
2. Em **Framework Preset**, deixe **Other**.
3. Deixe **Build Command** e **Output Directory** vazios.
4. Clique em **Deploy**.

A cada novo arquivo enviado ao GitHub, a Vercel publica a atualização sozinha.

**Domínio próprio**
Em **Settings > Domains**, adicione o subdomínio (por exemplo `avaliacao.basedecampeao.com.br`)
e crie no seu provedor de DNS o registro CNAME que a Vercel indicar.

## Formspree

- Na primeira resposta, o Formspree envia um e-mail de confirmação para o endereço da conta. Confirme para ativar o formulário.
- O plano gratuito recebe até 50 respostas por mês.
- Cada resposta chega com o assunto "Avaliação do atleta · Formando Laterais".
- Faça um envio de teste logo depois de publicar.

## Detalhes

- A página tem `noindex`, então não aparece no Google. Só entra quem recebe o link.
- Os campos marcados com `*` são obrigatórios. Os demais são opcionais.
