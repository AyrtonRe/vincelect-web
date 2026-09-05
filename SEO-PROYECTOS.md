# Páginas de proyectos

Cada proyecto tiene una página HTML estática en `/proyectos/<slug>/`, enlazada desde la portada. El contenido, la galería y los enlaces se pueden leer sin JavaScript. Los modales siguen disponibles como vista rápida.

Para ver el sitio localmente, extraer el ZIP completo y abrir `index.html` con doble clic. Los estilos e imágenes se cargan desde rutas relativas. `rutas-locales.js` adapta la navegación al abrir archivos con `file:`, incluyendo la vuelta a la portada y los proyectos relacionados. Cuando se usa un servidor o se publica el sitio, se conservan las URLs públicas originales. Los metadatos SEO siempre apuntan al dominio público.

Cada ficha muestra las fotografías en un carrusel y toda la descripción debajo, en una columna. Se puede deslizar con el dedo, usar las flechas o elegir una miniatura. Las fotos se muestran completas y se pueden abrir para ampliarlas. `carrusel-proyecto.js` sincroniza los controles, admite teclado y respeta la preferencia de movimiento reducido. Sin JavaScript, las fotos siguen disponibles mediante desplazamiento horizontal nativo.

Para agregar o actualizar un trabajo:

1. Editar `proyectos.js` y agregar las imágenes en la raíz del sitio.
2. Usar un `id` y un `slug` únicos. Conservar el slug después de publicar para no romper enlaces. El slug usa minúsculas, números y guiones.
3. Completar los textos del caso. `seoDescripcion` permite escribir una descripción breve y específica para buscadores; si falta, se usa `descripcionCorta`.
4. Ejecutar `node generar-html.js` desde cualquier carpeta.
5. Publicar el sitio con `index.html`, la carpeta `proyectos/`, `sitemap.xml`, `estilos.css`, `proyecto.css`, `rutas-locales.js`, `carrusel-proyecto.js` y todas las imágenes. No hace falta un servidor de JavaScript: cada ruta contiene su propio `index.html`.

El generador verifica slugs, IDs, fechas y existencia de imágenes. Actualiza las tarjetas, los modales, las fichas y las entradas de proyectos del sitemap. Conserva las otras entradas del sitemap. No asigna fechas de modificación ficticias a las fichas.

Después de publicar, comprobar una URL de proyecto en Google Search Console y enviar `https://vincelect.com.ar/sitemap.xml`. La generación local no publica el sitio ni envía solicitudes a Google. Google decide qué páginas indexa y cómo las posiciona.

Los controladores PID de 2025 y 2026 tienen páginas, fotografías y metadatos separados. Sus textos técnicos actuales son iguales: conviene agregar diferencias reales de aplicación, montaje y resultados. No se inventaron especificaciones para diferenciarlos.

Si se elimina un proyecto o cambia un slug ya publicado, revisar también la carpeta generada antigua y definir una redirección en el alojamiento. El generador no borra carpetas automáticamente.
