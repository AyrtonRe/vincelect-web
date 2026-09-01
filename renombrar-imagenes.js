// renombrar-imagenes.js
// -----------------------------------------------------------------------
// Renombra los archivos de imagen del sitio a nombres descriptivos (SEO)
// y actualiza automáticamente TODAS las referencias en proyectos.js,
// index.html y sobre-nosotros.html. Correr UNA sola vez.
//
// Uso:
//   1) Poné este archivo y mapeo-imagenes.json en la carpeta del sitio
//      (junto a index.html, proyectos.js, sobre-nosotros.html y las
//      imágenes .webp/.jpeg).
//   2) Corré:  node renombrar-imagenes.js
//   3) Después corré (si no lo hiciste ya) generar-html.js o abrí
//      administrador-proyectos.html para verificar que las tarjetas
//      sigan mostrando bien las imágenes.
//   4) Subí todo (imágenes + los 3 archivos de texto) al hosting,
//      reemplazando lo que había.
// -----------------------------------------------------------------------

const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const RUTA_MAPEO = path.join(DIR, 'mapeo-imagenes.json');
const ARCHIVOS_A_ACTUALIZAR = ['proyectos.js', 'index.html', 'sobre-nosotros.html'];

const mapeo = JSON.parse(fs.readFileSync(RUTA_MAPEO, 'utf8'));

// Ordenar las claves de más larga a más corta para que "PID2 (1).webp"
// se reemplace antes que "PID2.webp" y no queden restos pisados.
const entradas = Object.entries(mapeo).sort((a, b) => b[0].length - a[0].length);

console.log(`Mapeo cargado: ${entradas.length} imágenes.\n`);

// --- 1. Renombrar archivos en disco -------------------------------------
let renombrados = 0;
let noEncontrados = [];

entradas.forEach(([viejo, nuevo]) => {
    const rutaVieja = path.join(DIR, viejo);
    const rutaNueva = path.join(DIR, nuevo);

    if (fs.existsSync(rutaVieja)) {
        if (fs.existsSync(rutaNueva) && rutaVieja !== rutaNueva) {
            console.warn(`  ! Ya existe "${nuevo}", no se sobreescribe. Revisalo a mano.`);
            return;
        }
        fs.renameSync(rutaVieja, rutaNueva);
        renombrados++;
    } else {
        noEncontrados.push(viejo);
    }
});

console.log(`Archivos renombrados: ${renombrados}`);
if (noEncontrados.length > 0) {
    console.log(`No se encontraron en esta carpeta (¿ya renombrados o en otra carpeta?):`);
    noEncontrados.forEach(f => console.log('  - ' + f));
}

// --- 2. Reemplazar referencias en el código -----------------------------
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

ARCHIVOS_A_ACTUALIZAR.forEach((nombreArchivo) => {
    const ruta = path.join(DIR, nombreArchivo);
    if (!fs.existsSync(ruta)) {
        console.log(`\n(no existe ${nombreArchivo} en esta carpeta, se omite)`);
        return;
    }

    let contenido = fs.readFileSync(ruta, 'utf8');
    let reemplazos = 0;

    entradas.forEach(([viejo, nuevo]) => {
        const regex = new RegExp(escapeRegExp(viejo), 'g');
        const nuevoContenido = contenido.replace(regex, () => {
            reemplazos++;
            return nuevo;
        });
        contenido = nuevoContenido;
    });

    fs.writeFileSync(ruta, contenido, 'utf8');
    console.log(`\n${nombreArchivo}: ${reemplazos} referencias actualizadas.`);
});

console.log('\nListo. Revisá el sitio localmente antes de subir los cambios.');
