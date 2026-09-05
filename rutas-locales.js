// Al abrir con doble clic no hay servidor que resuelva / o una carpeta.
// Los recursos usan rutas relativas; adaptar solo la navegación en file:.
(() => {
    if (window.location.protocol !== 'file:') return;

    const raiz = new URL('.', document.currentScript.src);
    document.querySelectorAll('a[href]').forEach(enlace => {
        const href = enlace.getAttribute('href');
        if (!href.startsWith('/') || href.startsWith('//')) return;

        const destino = new URL(href.slice(1), raiz);
        if (destino.pathname.endsWith('/')) {
            destino.pathname += 'index.html';
        } else if (destino.pathname.endsWith('/sobre-nosotros')) {
            destino.pathname += '.html';
        }
        enlace.href = destino.href;
    });
})();
