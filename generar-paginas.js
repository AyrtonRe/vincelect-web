// Se ejecuta desde generar-html.js. No requiere dependencias externas.
const fs = require('fs');
const path = require('path');
const ORIGEN = 'https://vincelect.com.ar';
const esc = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ruta = proyecto => `/proyectos/${proyecto.slug}/`;
const url = proyecto => ORIGEN + ruta(proyecto);
const tipos = { desarrollo: 'Desarrollo a medida', armado: 'Armado de equipo', reparacion: 'Reparación de instrumental' };
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

function validarProyectos(proyectos, dir) {
  const slugs = new Set();
  const ids = new Set();
  for (const p of proyectos) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug || '') || slugs.has(p.slug)) {
      throw new Error(`Slug ausente, inválido o duplicado en proyecto ${p.id}`);
    }
    if (!/^\d+$/.test(p.id) || ids.has(p.id)) throw new Error(`ID inválido o duplicado: ${p.id}`);
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(p.tagFecha)) throw new Error(`Fecha inválida: ${p.id}`);
    for (const campo of ['titulo', 'descripcionCorta', 'necesidad', 'solucion']) {
      if (typeof p[campo] !== 'string' || !p[campo].trim()) throw new Error(`Falta ${campo}: ${p.id}`);
    }
    if (!tipos[p.tipo] || !Array.isArray(p.tecnologias) || !Array.isArray(p.imagenes) || !p.imagenes.length) {
      throw new Error(`Datos incompletos: ${p.id}`);
    }
    for (const imagen of p.imagenes) {
      if (!/^[a-zA-Z0-9_-]+\.(webp|png|jpe?g)$/i.test(imagen) || !fs.existsSync(path.join(dir, imagen))) {
        throw new Error(`Imagen inválida o ausente: ${imagen}`);
      }
    }
    ids.add(p.id);
    slugs.add(p.slug);
  }
}

function escribirSiCambio(destino, contenido) {
  if (fs.existsSync(destino) && fs.readFileSync(destino, 'utf8') === contenido) return;
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, contenido, 'utf8');
}

function generarPaginas(proyectos, dir, indexHtml) {
  // Reutilizar la navegación y la versión del CSS de la portada actual.
  const header = indexHtml.match(/<header class="site-header">[\s\S]*?<\/header>/)?.[0];
  const css = indexHtml.match(/href="(estilos\.css[^"\s]*)"/)?.[1];
  if (!header || !css) throw new Error('No se encontró la cabecera o el CSS en index.html');
  const cabecera = header
    .replace(/href="(?!https?:|\/)([^"]*)"/g, 'href="/$1"')
    .replace(/src="\/?(?!https?:|\/)([^"]*)"/g, 'src="../../$1"');
  const nombre = p => proyectos.filter(otro => otro.titulo === p.titulo).length > 1 ? `${p.titulo} (${p.badge})` : p.titulo;

  for (const p of proyectos) {
    const titulo = nombre(p);
    const descripcion = p.seoDescripcion || p.descripcionCorta;
    const fecha = `${meses[Number(p.tagFecha.slice(5)) - 1]} de ${p.tagFecha.slice(0, 4)}`;
    const consulta = `https://wa.me/5493426313828?text=${encodeURIComponent(`Hola Ayrton, vi el proyecto «${titulo}» (${url(p)}) y quiero consultar por un trabajo similar.`)}`;
    const relacionados = proyectos.filter(otro => otro.id !== p.id && otro.tipo === p.tipo).slice(0, 3);
    const datos = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage', '@id': url(p), url: url(p), name: titulo,
          description: descripcion, inLanguage: 'es-AR',
          mainEntity: { '@id': url(p) + '#trabajo' },
          breadcrumb: { '@id': url(p) + '#breadcrumb' }
        },
        {
          '@type': 'CreativeWork', '@id': url(p) + '#trabajo', name: titulo,
          url: url(p), description: p.descripcionCorta, inLanguage: 'es-AR',
          image: p.imagenes.map(imagen => `${ORIGEN}/${imagen}`),
          creator: { '@type': 'Organization', name: 'Vincelect', url: ORIGEN + '/' },
          mainEntityOfPage: { '@id': url(p) }
        },
        {
          '@type': 'BreadcrumbList', '@id': url(p) + '#breadcrumb',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: ORIGEN + '/' },
            { '@type': 'ListItem', position: 2, name: 'Proyectos', item: ORIGEN + '/#proyectos' },
            { '@type': 'ListItem', position: 3, name: titulo, item: url(p) }
          ]
        }
      ]
    };
    const pagina = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(titulo)} | Vincelect</title>
    <meta name="description" content="${esc(descripcion)}">
    <meta name="author" content="Vincelect">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${url(p)}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${esc(titulo)} | Vincelect">
    <meta property="og:description" content="${esc(descripcion)}">
    <meta property="og:url" content="${url(p)}">
    <meta property="og:image" content="${ORIGEN}/${esc(p.imagenes[0])}">
    <meta property="og:image:alt" content="${esc(titulo)}">
    <meta property="og:locale" content="es_AR">
    <meta property="og:site_name" content="Vincelect">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(titulo)} | Vincelect">
    <meta name="twitter:description" content="${esc(descripcion)}">
    <meta name="twitter:image" content="${ORIGEN}/${esc(p.imagenes[0])}">
    <link rel="icon" type="image/webp" href="../../isotipo-vincelect.webp">
    <link rel="apple-touch-icon" href="../../apple-touch-icon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../${esc(css)}">
    <link rel="stylesheet" href="../../proyecto.css?v=2">
    <script src="../../rutas-locales.js" defer></script>
    <script src="../../carrusel-proyecto.js?v=1" defer></script>
    <script type="application/ld+json">${JSON.stringify(datos).replace(/</g, '\\u003c')}</script>
</head>
<body class="project-page">
    ${cabecera}
    <main class="container project-detail">
        <nav class="project-breadcrumb" aria-label="Ruta de navegación">
            <ol><li><a href="/">Inicio</a></li><li><a href="/#proyectos">Proyectos</a></li><li aria-current="page">${esc(titulo)}</li></ol>
        </nav>
        <article>
            <header class="project-heading">
                <p class="project-meta">${esc(tipos[p.tipo])} · <time datetime="${p.tagFecha}">${fecha}</time></p>
                <h1>${esc(titulo)}</h1>
                <p class="project-byline">Un trabajo de <a href="/sobre-nosotros">Vincelect</a> · Santa Fe, Argentina</p>
            </header>
            <section class="project-carousel" data-carousel role="region" aria-roledescription="carrusel" aria-label="Fotografías del proyecto">
                <div class="project-carousel-frame">
                    <div class="project-carousel-track" id="fotos-proyecto" tabindex="0" aria-label="Fotografías; deslizá horizontalmente o usá las flechas del teclado">
                        ${p.imagenes.map((img, i) => `<figure class="project-slide" role="group" aria-roledescription="diapositiva" aria-label="${i + 1} de ${p.imagenes.length}">
                            <a href="../../${esc(img)}" target="_blank" rel="noopener noreferrer" aria-label="Ampliar fotografía ${i + 1} de ${esc(titulo)}">
                                <img src="../../${esc(img)}" alt="${esc(titulo)} — fotografía ${i + 1} del proyecto" ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'} draggable="false">
                            </a>
                        </figure>`).join('\n                        ')}
                    </div>
                </div>
                ${p.imagenes.length > 1 ? `<div class="project-carousel-controls" hidden>
                    <button class="project-carousel-arrow" type="button" data-previous aria-label="Fotografía anterior" aria-controls="fotos-proyecto" disabled><span aria-hidden="true">←</span></button>
                    <p class="project-carousel-count" role="status" aria-live="polite" aria-atomic="true">Foto <span data-photo-count>1 de ${p.imagenes.length}</span></p>
                    <button class="project-carousel-arrow" type="button" data-next aria-label="Fotografía siguiente" aria-controls="fotos-proyecto"><span aria-hidden="true">→</span></button>
                </div>
                <div class="project-carousel-thumbnails" role="group" aria-label="Elegir fotografía" hidden>
                    ${p.imagenes.map((img, i) => `<button type="button" class="project-carousel-thumbnail" data-photo="${i}" aria-label="Ver fotografía ${i + 1}" aria-pressed="${i === 0}" aria-controls="fotos-proyecto"><img src="../../${esc(img)}" alt="" width="72" height="54" loading="lazy" draggable="false"></button>`).join('\n                    ')}
                </div>` : ''}
                <p class="project-carousel-hint">${p.imagenes.length > 1 ? 'Deslizá para ver las fotos. Tocá una imagen para ampliarla.' : 'Tocá la imagen para ampliarla.'}</p>
            </section>
            <div class="project-story">
                    <section aria-labelledby="descripcion"><h2 id="descripcion">Descripción del proyecto</h2><p class="project-intro">${esc(p.descripcionCorta)}</p></section>
                    <section aria-labelledby="necesidad"><h2 id="necesidad">La necesidad</h2><p>${esc(p.necesidad)}</p></section>
                    <section aria-labelledby="solucion"><h2 id="solucion">La solución</h2><p>${esc(p.solucion)}</p></section>
                    ${p.beneficios?.length ? `<section aria-labelledby="beneficios"><h2 id="beneficios">Beneficios</h2><ul>${p.beneficios.map(b => `<li>${esc(b)}</li>`).join('')}</ul></section>` : ''}
                    <section aria-labelledby="tecnologias"><h2 id="tecnologias">Tecnologías aplicadas</h2><ul class="project-technologies">${p.tecnologias.map(t => `<li>${esc(t)}</li>`).join('')}</ul></section>
            </div>
            <section class="project-contact" aria-labelledby="consulta">
                <div><h2 id="consulta">¿Necesitás una solución similar?</h2><p>Contame qué equipo tenés o qué necesitás desarrollar.</p></div>
                <a class="btn-primary" href="${esc(consulta)}" target="_blank" rel="noopener noreferrer">CONSULTAR POR WHATSAPP</a>
            </section>
        </article>
        ${relacionados.length ? `<nav class="project-related" aria-label="Otros proyectos"><h2>Otros trabajos de Vincelect</h2><ul>${relacionados.map(otro => `<li><a href="${ruta(otro)}">${esc(nombre(otro))} <span aria-hidden="true">→</span></a></li>`).join('')}</ul></nav>` : ''}
        <a class="project-back" href="/#proyectos">← Volver a todos los proyectos</a>
    </main>
    <footer class="project-footer"><div class="container"><p>Vincelect · Electrónica para laboratorios e industria · Santa Fe, Argentina</p><a href="/#contacto">Contacto</a></div></footer>
</body>
</html>
`;
    escribirSiCambio(path.join(dir, 'proyectos', p.slug, 'index.html'), pagina);
  }

  // Conservar las URLs, imágenes y fechas existentes de las otras páginas.
  // Sin lastmod automático: regenerar no equivale a modificar el contenido.
  const sitemapPath = path.join(dir, 'sitemap.xml');
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  if (!sitemap.includes('</urlset>')) throw new Error('sitemap.xml inválido');
  sitemap = sitemap.replace(/\s*<url>[\s\S]*?<\/url>/g, bloque => /<loc>https:\/\/vincelect\.com\.ar\/proyectos\//.test(bloque) ? '' : bloque);
  const entradas = proyectos.map(p => `  <url>
    <loc>${url(p)}</loc>${p.imagenes.map(img => `
    <image:image><image:loc>${ORIGEN}/${esc(img)}</image:loc></image:image>`).join('')}
  </url>`).join('\n');
  sitemap = sitemap.replace(/\s*<\/urlset>/, `\n${entradas}\n</urlset>`);
  escribirSiCambio(sitemapPath, sitemap);
}

module.exports = { validarProyectos, generarPaginas };
