// El desplazamiento táctil funciona de forma nativa, incluso sin JavaScript.
// Este archivo agrega controles y sincroniza la foto seleccionada.
(() => {
    document.querySelectorAll('[data-carousel]').forEach(carrusel => {
        const pista = carrusel.querySelector('.project-carousel-track');
        const fotos = Array.from(carrusel.querySelectorAll('.project-slide'));
        const controles = carrusel.querySelector('.project-carousel-controls');
        const miniaturas = carrusel.querySelector('.project-carousel-thumbnails');
        if (!pista || fotos.length < 2 || !controles || !miniaturas) return;

        const anterior = controles.querySelector('[data-previous]');
        const siguiente = controles.querySelector('[data-next]');
        const contador = controles.querySelector('[data-photo-count]');
        const botones = Array.from(miniaturas.querySelectorAll('[data-photo]'));
        const movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)');
        let actual = 0;
        let finDesplazamiento;
        let ancho = pista.clientWidth;

        function actualizar() {
            anterior.disabled = actual === 0;
            siguiente.disabled = actual === fotos.length - 1;
            contador.textContent = `${actual + 1} de ${fotos.length}`;
            botones.forEach((boton, i) => boton.setAttribute('aria-pressed', String(i === actual)));

            const boton = botones[actual].getBoundingClientRect();
            const tira = miniaturas.getBoundingClientRect();
            if (boton.left < tira.left || boton.right > tira.right) {
                miniaturas.scrollTo({
                    left: miniaturas.scrollLeft + boton.left - tira.left - (tira.width - boton.width) / 2,
                    behavior: movimientoReducido.matches ? 'instant' : 'smooth'
                });
            }
        }

        function irA(indice) {
            clearTimeout(finDesplazamiento);
            actual = Math.max(0, Math.min(fotos.length - 1, indice));
            pista.scrollTo({
                left: actual * pista.clientWidth,
                behavior: movimientoReducido.matches ? 'instant' : 'smooth'
            });
            actualizar();
        }

        anterior.addEventListener('click', () => irA(actual - 1));
        siguiente.addEventListener('click', () => irA(actual + 1));
        botones.forEach((boton, i) => boton.addEventListener('click', () => irA(i)));
        carrusel.addEventListener('keydown', evento => {
            const destinos = { ArrowLeft: actual - 1, ArrowRight: actual + 1, Home: 0, End: fotos.length - 1 };
            if (!(evento.key in destinos) || evento.altKey || evento.ctrlKey || evento.metaKey) return;
            evento.preventDefault();
            irA(destinos[evento.key]);
        });

        // Actualizar una vez terminado el gesto, sin anunciar cada paso de la animación.
        pista.addEventListener('scroll', () => {
            clearTimeout(finDesplazamiento);
            finDesplazamiento = setTimeout(() => {
                if (!pista.clientWidth) return;
                actual = Math.max(0, Math.min(fotos.length - 1, Math.round(pista.scrollLeft / pista.clientWidth)));
                actualizar();
            }, 120);
        }, { passive: true });

        function ajustarAncho() {
            if (!pista.clientWidth || pista.clientWidth === ancho) return;
            ancho = pista.clientWidth;
            clearTimeout(finDesplazamiento);
            pista.scrollTo({ left: actual * ancho, behavior: 'instant' });
            actualizar();
        }
        if ('ResizeObserver' in window) {
            new ResizeObserver(ajustarAncho).observe(pista);
        } else {
            window.addEventListener('resize', ajustarAncho);
        }

        controles.hidden = false;
        miniaturas.hidden = false;
        carrusel.classList.add('is-enhanced');
        actualizar();
    });
})();
