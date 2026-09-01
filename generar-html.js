// generar-html.js
// -----------------------------------------------------------------------
// Genera el HTML ESTÁTICO de las tarjetas y modales de proyectos a partir
// de proyectos.js, y lo inyecta dentro de index.html (entre marcadores).
//
// Por qué existe esto:
// Antes, index.html traía <div id="contenedor-tarjetas"></div> VACÍO, y
// un <script> lo llenaba en el navegador vía innerHTML. Googlebot indexa
// primero el HTML crudo (vacío) y solo a veces vuelve más tarde a
// renderizar el JS -> los proyectos entraban y salían del índice de forma
// impredecible. Con este script, el contenido de los proyectos queda
// escrito directamente en el HTML que se sube al hosting, así que
// SIEMPRE está disponible para los buscadores, sin depender del
// renderizado JS.
//
// Cómo usarlo cada vez que agregues/edites un proyecto:
//   1) Editá proyectos.js como siempre.
//   2) Corré:  node generar-html.js
//   3) Subí el index.html resultante a tu hosting (junto con proyectos.js
//      y estilos.css, que no cambian de rol).
//
// El JS de filtrado en el navegador ahora solo hace show/hide de las
// tarjetas ya existentes (no reconstruye el DOM), así que sigue andando
// igual para el usuario pero no le esconde nada a los buscadores.
// -----------------------------------------------------------------------

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DIR = __dirname;
const RUTA_PROYECTOS_JS = path.join(DIR, 'proyectos.js');
const RUTA_INDEX = path.join(DIR, 'index.html');

// --- 1. Cargar proyectos.js y extraer el array `proyectos` -------------
// Nota: usamos `var` en vez de `const`/`let` al ejecutar el script en el
// sandbox de vm, porque las declaraciones const/let de nivel superior no
// quedan como propiedad del objeto global del contexto (solo var sí).
const codigoProyectos = fs
  .readFileSync(RUTA_PROYECTOS_JS, 'utf8')
  .replace(/^\s*const\s+proyectos\s*=/, 'var proyectos =');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(codigoProyectos, sandbox);
const proyectos = sandbox.proyectos;

if (!Array.isArray(proyectos)) {
  console.error('No se pudo leer el array "proyectos" desde proyectos.js');
  process.exit(1);
}

// --- 2. Helpers de escape (por las dudas con caracteres especiales) ----
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// --- 3. Generar HTML de tarjetas y modales (todas, ordenadas por fecha) -
const proyectosOrdenados = proyectos
  .slice()
  .sort((a, b) => b.tagFecha.localeCompare(a.tagFecha));

let htmlTarjetas = '';
let htmlModales = '';

proyectosOrdenados.forEach((proyecto) => {
  htmlTarjetas += `
                <div class="project-card" data-tipo="${escapeHtml(proyecto.tipo)}">
                    <img src="${escapeHtml(proyecto.imagenes[0])}" alt="Vista miniatura del proyecto: ${escapeHtml(proyecto.titulo)}" class="card-img" loading="lazy">
                    <span class="badge right">${escapeHtml(proyecto.badge)}</span>
                    <h3>${escapeHtml(proyecto.titulo)}</h3>
                    <p>${escapeHtml(proyecto.descripcionCorta)}</p>
                    <a href="#modal-proyecto-${escapeHtml(proyecto.id)}" class="btn-primary">VER DETALLES Y GALERÍA</a>
                </div>`;

  let techTags = '';
  proyecto.tecnologias.forEach((tech) => {
    techTags += `<span class="tech-tag">• ${escapeHtml(tech)}</span>`;
  });

  let thumbnails = '';
  proyecto.imagenes.forEach((img) => {
    thumbnails += `<img src="${escapeHtml(img)}" alt="Miniatura de la galería de ${escapeHtml(proyecto.titulo)}" onclick="cambiarImagen('main-img-p${escapeHtml(proyecto.id)}', this.src)" class="thumb" loading="lazy">`;
  });

  let beneficiosHtml = '';
  if (proyecto.beneficios && proyecto.beneficios.length > 0) {
    let items = '';
    proyecto.beneficios.forEach((item) => {
      items += `<li>${escapeHtml(item)}</li>`;
    });
    beneficiosHtml = `
                    <div class="info-block">
                        <h4 class="info-title">📈 4. BENEFICIOS</h4>
                        <ul class="info-list">
                            ${items}
                        </ul>
                    </div>`;
  }

  htmlModales += `
                <div id="modal-proyecto-${escapeHtml(proyecto.id)}" class="modal-overlay">
                    <div class="modal-content">
                        <a href="#hardware" class="modal-close" aria-label="Cerrar modal de proyecto">×</a>
                        <div class="modal-header">
                            <span class="tag-title">${escapeHtml(proyecto.tagCategoria)}</span>
                            <span class="tag-date">${escapeHtml(proyecto.tagFecha)}</span>
                            <h2>${escapeHtml(proyecto.titulo)}</h2>
                        </div>
                        <div class="modal-grid">
                            <div class="modal-gallery-container">
                                <img id="main-img-p${escapeHtml(proyecto.id)}" src="${escapeHtml(proyecto.imagenes[0])}" class="modal-main-img" alt="Imagen en detalle: ${escapeHtml(proyecto.titulo)}">
                                <div class="modal-thumbnails">
                                    ${thumbnails}
                                </div>
                            </div>
                            <div class="modal-info">
                                <h4 class="info-title">⚙️ 1. TECNOLOGÍAS APLICADAS</h4>
                                <div class="tech-tags">
                                    ${techTags}
                                </div>
                                <div class="info-block">
                                    <h4 class="info-title">🎯 2. NECESIDAD A SOLUCIONAR</h4>
                                    <p>${escapeHtml(proyecto.necesidad)}</p>
                                </div>
                                <div class="info-block">
                                    <h4 class="info-title">💡 3. SOLUCIÓN DESARROLLADA</h4>
                                    <p>${escapeHtml(proyecto.solucion)}</p>
                                </div>
                                ${beneficiosHtml}
                            </div>
                        </div>
                    </div>
                </div>`;
});

// --- 4. Inyectar en index.html entre marcadores -------------------------
let indexHtml = fs.readFileSync(RUTA_INDEX, 'utf8');

function inyectar(html, marcadorInicio, marcadorFin, contenido) {
  const regex = new RegExp(
    `(${marcadorInicio})[\\s\\S]*?(${marcadorFin})`
  );
  if (!regex.test(html)) {
    throw new Error(`No se encontraron los marcadores ${marcadorInicio} / ${marcadorFin} en index.html`);
  }
  return html.replace(regex, `$1\n${contenido}\n            $2`);
}

indexHtml = inyectar(indexHtml, '<!-- INICIO-TARJETAS -->', '<!-- FIN-TARJETAS -->', htmlTarjetas);
indexHtml = inyectar(indexHtml, '<!-- INICIO-MODALES -->', '<!-- FIN-MODALES -->', htmlModales);

fs.writeFileSync(RUTA_INDEX, indexHtml, 'utf8');

console.log(`OK: ${proyectosOrdenados.length} proyectos escritos en index.html`);
