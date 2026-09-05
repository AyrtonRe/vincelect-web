const proyectos = [
    {
        id: "1",
        slug: "sistema-adquisicion-datos-cromatografo-gases",
        seoDescripcion: "Adquisición de datos para cromatógrafos de gases: electrónica DAQ y software de análisis desarrollados por Vincelect en Santa Fe.",
        tipo: "desarrollo",
        badge: "2026",
        titulo: "Sistema de adquisición de datos para cromatógrafo",
        descripcionCorta: "Electrónica de adquisición para sensores analógicos y software de análisis y posprocesamiento de datos en cromatógrafos de gases.",
        tagCategoria: "MICROCONTROLADORES",
        tagFecha: "2026-06",
        tecnologias: ["Microcontrolador", "Integración con Software", "Adquisición de alta precisión y velocidad"],
        necesidad: "Se requería modernizar el sistema de lectura de un cromatógrafo de gases, reemplazando el registro obsoleto por un sistema digital que permitiera la captura, almacenamiento y análisis de datos en tiempo real de forma confiable.",
        solucion: "Se diseñó y ensambló una placa de adquisición de datos (DAQ) a medida, utilizando microcontroladores y conversores ADC de alta resolución, integrada a un software de escritorio desarrollado para el posprocesamiento de la información.",
        beneficios: [
            "Mayor precisión en la lectura de picos cromatográficos.",
            "Automatización del almacenamiento y gestión de resultados.",
            "Reducción drástica de tiempos de análisis y exportación directa a formato digital."
        ],
        // Extensiones actualizadas a .webp
        imagenes: ["daq-cromatografo-gases-01.webp", "daq-cromatografo-gases-02.webp", "daq-cromatografo-gases-03.webp"]
    },
    {
        id: "2",
        slug: "reactor-fotocatalisis",
        seoDescripcion: "Reactor para fotocatálisis con iluminación RGB de intensidad variable y control térmico. Diseño y fabricación de Vincelect en Santa Fe.",
        tipo: "desarrollo",
        badge: "2026",
        titulo: "Diseño y desarrollo de bioreactor para fotocatálisis",
        descripcionCorta: "Reactor cilíndrico con iluminación RGB regulable, control térmico y compatibilidad mecánica con agitador magnético.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2026-05",
        tecnologias: ["Electrónica Analógica", "Impresión 3D", "Diseño PCB"],
        necesidad: "Se necesitaba un reactor cilíndrico para fotocatálisis con iluminación uniforme en 360°, intensidad regulable y temperatura interna inferior a 60 °C, límite estructural del PLA utilizado.",
        solucion: "Se fabricó un dispositivo con control independiente de intensidad para cada canal RGB, ventilación para el control térmico y una estructura compatible con un agitador magnético inferior.",
        beneficios: [
            "Control térmico eficiente que previene la deformación del PLA.",
            "Iluminación homogénea optimizando la reacción fotocatalítica.",
            "Interfaz amigable y modularidad para futuras expansiones."
        ],
        imagenes: ["bioreactor-fotocatalisis-01.webp", "bioreactor-fotocatalisis-02.webp", "bioreactor-fotocatalisis-03.webp"]
    },
    {
        id: "3",
        slug: "dispositivo-cromatografia-tlc",
        seoDescripcion: "Dispositivo para cromatografía TLC con iluminación UV regulable y registro mediante cámara. Desarrollo de Vincelect en Santa Fe.",
        tipo: "desarrollo",
        badge: "2026",
        titulo: "Dispositivo para cromatografía TLC",
        descripcionCorta: "Diseño de un equipo para cromatografía TLC con control PWM de LEDs UV de 385 y 420 nm e integración de otras fuentes de iluminación.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2026-04",
        tecnologias: ["Electrónica Analógica", "Impresión 3D", "Diseño PCB"],
        necesidad: "Se necesitaba observar placas de cromatografía TLC con distintas longitudes de onda. El equipo debía controlar LEDs de 385 y 420 nm, admitir tubos de 254 y 300 nm y evitar fugas de luz hacia el operador.",
        solucion: "Se fabricó un dispositivo opaco con control independiente de intensidad para 385 y 420 nm, calces para otras fuentes de iluminación y una abertura preparada para registrar los resultados con un smartphone o una cámara.",
        beneficios: [
            "Dispositivo funcional, compacto y de muy bajo costo.",
            "Iluminación homogénea para mejorar la observación de las placas TLC.",
            "Estructura compatible con múltiples tubos de iluminación y formas de registro."
        ],
        imagenes: ["dispositivo-cromatografia-tlc-01.webp", "dispositivo-cromatografia-tlc-02.webp", "dispositivo-cromatografia-tlc-03.webp", "dispositivo-cromatografia-tlc-04.webp", "dispositivo-cromatografia-tlc-05.webp"]
    },
    {
        id: "4",
        slug: "potenciostato-portatil-eis",
        seoDescripcion: "Potenciostato portátil para EIS, voltamperometría cíclica y cronoamperometría, con firmware y software de control. Proyecto de Vincelect en Santa Fe.",
        tipo: "desarrollo",
        badge: "2026",
        titulo: "Desarrollo de potenciostato portátil",
        descripcionCorta: "Equipo portátil para espectroscopía de impedancia electroquímica (EIS), voltamperometría cíclica (CV) y cronoamperometría (CA), con firmware y software de control.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2026-08",
        tecnologias: ["Front-end analógico AD5940", "Impresión 3D", "Procesamiento matemático", "Diseño de PCB","Integración con software"],
        necesidad: "Se requería un potenciostato para analizar muestras electroquímicas. Debido al alto costo de los equipos comerciales (alrededor de USD 10.000) y la dificultad para conseguirlos en el país, se solicitó desarrollar una alternativa desde cero.",
        solucion: "Se desarrolló un equipo compacto y portátil basado en el front-end analógico AD5940, con alimentación USB, firmware de adquisición y software HMI para configurar ensayos y visualizar resultados desde una PC.",
        beneficios: [
            "Dispositivo con precisión y exactitud de equipos comerciales.",
            "Costo final de un 30% respecto a equipos de la misma capacidad.",
            "Equipo compacto y de bajo consumo, ideal para utilizarse en análisis de campo."
        ],
        imagenes: ["potenciostato-portatil-eis-01.webp", "potenciostato-portatil-eis-02.webp", "potenciostato-portatil-eis-03.webp", "potenciostato-portatil-eis-04.webp"]
    },
    {
        id: "5",
        slug: "digestor-kjeldahl-3-bloques",
        seoDescripcion: "Digestor Kjeldahl de tres bloques con resistencias de Nicrom, aislamiento térmico y extracción de gases. Desarrollo de Vincelect en Santa Fe.",
        tipo: "desarrollo",
        badge: "2025",
        titulo: "Desarrollo de digestor Kjeldahl de múltiples bloques",
        descripcionCorta: "Diseño y construcción de un digestor Kjeldahl de tres posiciones, con control individual de hasta 400 W por bloque.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2025-09",
        tecnologias: ["Impresión 3D","Diseño de PCB","SCR","Aislación térmica"],
        necesidad: "Se requería desarrollar un equipo de laboratorio destinado a realizar el método Kjeldahl (digestión de muestras para análisis de nitrógeno) con capacidad para procesar tres muestras de forma simultánea. Entre sus requerimientos principales, el diseño debía integrar un control de temperatura independiente para cada plaza y una arquitectura modular que permitiera el reemplazo rápido de los elementos calefactores para asegurar una óptima mantenibilidad. Además, era fundamental que el sistema incluyera soporte para matraces de 800 ml y contara con una aislación térmica eficiente, indispensable para proteger tanto al usuario como a los componentes electrónicos del equipo. Debido a la dificultad de conseguir este producto en el país, se nos solicitó el diseño del mismo priorizando la facilidad de reparación de este.",
        solucion: "El proyecto comenzó con el modelado de la estructura en SolidWorks para validar las dimensiones y el flujo de calor, lo que permitió fabricar tres chimeneas internas de aluminio diseñadas para dirigir la temperatura hacia el balón. Como elemento calefactor se utilizaron resistencias de Nicrom bobinadas manualmente sobre bases de ladrillo refractario mecanizado e instaladas en la base de dichas chimeneas. El montaje y la aislación se completaron colocando mallas de fibra de vidrio en la parte superior para asentar los matraces y rellenando todo el volumen vacío con lana de vidrio. Durante las pruebas iniciales, se detectó que la radiación térmica descendente del ladrillo carbonizaba el aislante de los cables de alimentación; este fallo se resolvió rápidamente rediseñando el montaje para incluir una capa de fibra de vidrio debajo del refractario, logrando así desacoplar térmicamente las conexiones eléctricas. Finalmente, el trabajo concluyó con el acabado estético mediante la pintura del gabinete, el montaje de las cajas de control externas y la conexión de la vidriería correspondiente al sistema de extracción de gases.",
        beneficios: [
            "Dispositivo de alta potencia para digestiones de alto volumen.",
            "Costo final de un 40% respecto a equipos de la misma capacidad.",
            "Equipo con capacidad para 3 matraces con control individual."
        ],
        imagenes: ["digestor-kjeldahl-3-bloques-01.webp", "digestor-kjeldahl-3-bloques-02.webp", "digestor-kjeldahl-3-bloques-03.webp", "digestor-kjeldahl-3-bloques-04.webp"]
    },
    {
        id: "6",
        slug: "controlador-temperatura-pid-2026",
        seoDescripcion: "Controlador de temperatura PID armado por Vincelect en junio de 2026: estructura, conexión eléctrica y galería del equipo. Santa Fe, Argentina.",
        tipo: "armado",
        badge: "2026",
        titulo: "Controlador de temperatura PID",
        descripcionCorta: "Diseño de la estructura y conexión eléctrica de un controlador PID para mantener la temperatura requerida por el proceso.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2026-06",
        
        tecnologias: ["Control PID", "Diseño de estructura", "Conexión eléctrica"],
        necesidad: "Se requería un sistema confiable para el control de temperatura del proceso.",
        solucion: "Se armó un controlador PID asegurando el cumplimiento de las variables térmicas requeridas.",
        beneficios: [
            "Mayor precisión en el control de temperatura.",
            "Cumplimiento estricto del proceso."
        ],
        
        imagenes: ["controlador-temperatura-pid-2026-01.webp", "controlador-temperatura-pid-2026-02.webp", "controlador-temperatura-pid-2026-03.webp", "controlador-temperatura-pid-2026-04.webp"]
    },
    {
        id: "7",
        slug: "calentador-planta-piloto",
        seoDescripcion: "Calentador de agua e instalación eléctrica para una planta piloto de extracción de aceite de uva. Proyecto de Vincelect en Santa Fe.",
        tipo: "armado",
        badge: "2025",
        titulo: "Calentador e instalación eléctrica para planta piloto",
        descripcionCorta: "Diseño de un sistema para calentar agua en una planta piloto, con control de temperatura y tablero eléctrico de alimentación.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2025-05",
        
        tecnologias: ["Control de temperatura", "Diseño de tablero eléctrico", "Conexión eléctrica"],
        necesidad: "Se requería calentar agua y controlar su temperatura con precisión en una planta piloto, además de resolver la alimentación y protección eléctrica del sistema.",
        solucion: "Se construyó un calentador con resistencia comercial reemplazable y estructura de acero inoxidable para inmersión. El recipiente se aisló térmica y eléctricamente, y se integró un tablero con control de temperatura mediante SSR.",
        beneficios: [
            "Control preciso de la temperatura, utilizando controlador mediante SSR.",
            "Sostenibilidad en el tiempo, asegurando la facilidad de mantener el calentador."
        ],
        
        imagenes: ["calentador-planta-piloto-aceite-uva-01.webp", "calentador-planta-piloto-aceite-uva-02.webp", "calentador-planta-piloto-aceite-uva-03.webp", "calentador-planta-piloto-aceite-uva-04.webp", "calentador-planta-piloto-aceite-uva-05.webp"]
    },
    {
        id: "8",
        slug: "manta-calefactora-flexible",
        seoDescripcion: "Manta calefactora flexible de Nicrom para superficies curvas: diseño, aislamiento y pruebas térmicas. Proyecto de Vincelect en Santa Fe.",
        tipo: "desarrollo",
        badge: "2025",
        titulo: "Diseño y Prototipado de Manta Calefactora Flexible",
        descripcionCorta: "Diseño y validación de una manta calefactora flexible de hasta 400 W para aplicar calor controlado sobre superficies cilíndricas o irregulares.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2025-10",
        
        tecnologias: ["Control de temperatura", "Calentadores flexibles", "Aislamiento térmico"],
        necesidad: "Necesidad de aplicar calor controlado en superficies con geometría irregular o cilíndrica (ej. columnas de cromatografía) donde las placas rígidas no son viables. Se requiere un elemento flexible, capaz de soportar altas temperaturas y con aislamiento eléctrico robusto.",
        solucion: "El desarrollo comenzó con el diseño teórico de una carga resistiva de 73 Ω, empleando 13 metros de alambre de Nicrom de 0.5 mm para proyectar una potencia de 660 W (3 A). Para su manufactura, el conductor fue encapsulado en vainas de fibra de vidrio y tejido en un patrón de serpentina sobre una malla estructural. Durante las pruebas de carga, se detectó que la potencia nominal generaba temperaturas excesivas en los puntos de cruce, creando zonas de calor crítico (hotspots). Para mitigar este problema, se aplicó un ajuste operativo limitando la alimentación a 2.2 A (400 W), lo que permitió estabilizar la temperatura máxima en 400 °C dentro de los puntos críticos. Finalmente, el equipo superó la validación mediante una prueba de estabilidad térmica a 300 W, logrando mantener una temperatura constante de 270 °C sobre el objeto de ensayo.",
        beneficios: [
            "El diseño prioriza la seguridad operativa mediante un doble aislamiento físico.",
            "La flexibilidad del tejido permite que la manta se adapte a radios de curvatura pequeños sin estresar mecánicamente al conductor interno."
        ],
        
        imagenes: ["manta-calefactora-flexible-01.webp", "manta-calefactora-flexible-02.webp", "manta-calefactora-flexible-03.webp", "manta-calefactora-flexible-04.webp", "manta-calefactora-flexible-05.webp"]
    },
    {
        id: "9",
        slug: "reparacion-hplc-konik-a5000",
        seoDescripcion: "Reparación de cromatógrafo HPLC Konik A5000: diagnóstico electrónico, reparación de PCB y rediseño de la interfaz HMI. Vincelect, Santa Fe.",
        tipo: "reparacion",
        badge: "2025",
        titulo: "Reparación Integral y Rediseño de Interfaz HMI - Cromatógrafo HPLC Konik A5000",
        descripcionCorta: "Diagnóstico y recuperación de un cromatógrafo líquido Konik, con reparación electrónica y rediseño de la interfaz HMI.",
        tagCategoria: "REPARACIÓN",
        tagFecha: "2025-10",
        
        tecnologias: ["Electrónica analógica","Diseño HMI"],
        necesidad: "El equipo se encontraba inoperativo. La etapa de potencia (bombas hidráulicas y elementos calefactores) encendía correctamente, pero la etapa de control lógico y la Interfaz Hombre-Máquina (HMI) no daban respuesta, impidiendo cualquier configuración o uso del equipo.",
        solucion: "El proceso comenzó con el despiece completo del equipo para su inspección visual, donde se detectaron daños físicos severos por carbonización en los pines de comunicación y resistencias limitadoras abiertas; evidencias claras de una falla catastrófica provocada por un cortocircuito o una conexión externa errónea. Para solucionarlo, primero se sanearon las pistas de la placa (PCB), asegurando la continuidad mediante el reemplazo de los pines dañados con soldadura directa de cableado. Luego, el diagnóstico de la interfaz (HMI) permitió rastrear la falla hasta la lógica de control, por lo que se reemplazaron dos circuitos integrados fundamentales (un SN7442 y un ULN2003) encargados del manejo de los displays y la multiplexación. Finalmente, debido a que el teclado de membrana original presentaba daños irreversibles, se aplicó ingeniería inversa sobre su matriz para diseñar y fabricar un módulo completamente nuevo, desarrollando desde la electrónica de los pulsadores y la gráfica del panel frontal, hasta su adaptación mecánica definitiva en el chasis original.",
        beneficios: [
            "Recuperación funcional de un cromatógrafo que se encontraba fuera de servicio.",
            "Reemplazo de una interfaz dañada y sin disponibilidad directa de repuestos.",
            "Extensión de la vida útil del equipo sin afrontar el costo de una sustitución completa."
        ],
        
        imagenes: ["reparacion-hplc-konik-a5000-01.webp", "reparacion-hplc-konik-a5000-02.webp", "reparacion-hplc-konik-a5000-03.webp", "reparacion-hplc-konik-a5000-04.webp"]
    },
    {
    id: "11",
    slug: "agitador-vertical-pwm-laboratorio",
    seoDescripcion: "Agitador vertical de laboratorio con motor brushless, regulación PWM y timer. Diseño y fabricación de Vincelect en Santa Fe.",
    tipo: "desarrollo",
    badge: "2024",
    titulo: "Desarrollo de agitador vertical de laboratorio con control PWM",
    descripcionCorta: "Diseño y ensamble de agitador vertical de 1500 RPM con motor brushless, regulación de velocidad por PWM y timer configurable para control del tiempo de funcionamiento.",
    tagCategoria: "VALIDACIÓN",
    tagFecha: "2024-06",
    tecnologias: ["Motor Brushless", "Control PWM", "Impresión 3D", "Timer de proceso"],
    necesidad: "Se requería un agitador vertical de laboratorio capaz de sostener un torque constante durante todo el rango de velocidades, con una regulación fina y continua de las revoluciones, además de un control de tiempo de funcionamiento para automatizar el proceso de agitación.",
    solucion: "Se desarrolló un agitador vertical con motor brushless de 1500 RPM y 0,8 kg·cm de torque, regulado por PWM para conservar buena parte del torque en un amplio rango de velocidades. Se incorporaron un temporizador y ajustes de posición vertical y horizontal.",
    beneficios: [
        "Torque prácticamente constante en todo el rango de velocidades gracias al control PWM.",
        "Alta durabilidad para uso continuo gracias al motor brushless.",
        "Ajuste de posición en vertical y horizontal, y timer integrado para automatizar el proceso."
    ],
    imagenes: ["agitador-vertical-pwm-laboratorio-01.webp", "agitador-vertical-pwm-laboratorio-02.webp", "agitador-vertical-pwm-laboratorio-03.webp", "agitador-vertical-pwm-laboratorio-04.webp", "agitador-vertical-pwm-laboratorio-05.webp", "agitador-vertical-pwm-laboratorio-06.webp"]
    },
    {
        id: "10",
        slug: "controlador-temperatura-pid-2025",
        seoDescripcion: "Controlador de temperatura PID armado por Vincelect en mayo de 2025: estructura, conexión eléctrica y galería del equipo. Santa Fe, Argentina.",
        tipo: "armado",
        badge: "2025",
        titulo: "Controlador de temperatura PID",
        descripcionCorta: "Diseño de la estructura y conexión eléctrica de un controlador PID para mantener la temperatura requerida por el proceso.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2025-05",
        
        tecnologias: ["Control PID", "Diseño de estructura", "Conexión eléctrica"],
        necesidad: "Se requería un sistema confiable para el control de temperatura del proceso.",
        solucion: "Se armó un controlador PID asegurando el cumplimiento de las variables térmicas requeridas.",
        beneficios: [
            "Mayor precisión en el control de temperatura.",
            "Cumplimiento estricto del proceso."
        ],
        
        imagenes: ["controlador-temperatura-pid-2025-01.webp", "controlador-temperatura-pid-2025-02.webp", "controlador-temperatura-pid-2025-03.webp", "controlador-temperatura-pid-2025-04.webp"]
    },
    {
    id: "12",
    slug: "reparacion-agitador-calentador-dlab",
    seoDescripcion: "Reparación de agitador calentador DLAB MS-H-S: fuente, pistas dañadas por corrosión y protección antisalpicaduras. Vincelect, Santa Fe.",
    tipo: "reparacion",
    badge: "2025",
    titulo: "Reparación de Agitador Calentador de Laboratorio (DLAB MS-H-S)",
    descripcionCorta: "Diagnóstico y reparación de agitador calentador magnético, con reemplazo de fuente de alimentación, reconstrucción de pistas del motor dañadas por corrosión química y diseño de protección antisalpicaduras.",
    tagCategoria: "REPARACIÓN",
    tagFecha: "2025-03",
    tecnologias: ["Electrónica analógica", "Reconstrucción de PCB", "Impresión 3D", "Fuentes conmutadas"],
    necesidad: "El equipo se encontraba fuera de servicio, con el transformador de la fuente principal de alimentación quemado. Adicionalmente, la placa presentaba pistas comidas por ataque químico en la zona del motor, y un potenciómetro también resultó afectado por la misma corrosión, comprometiendo la calibración del equipo.",
    solucion: "Se reemplazó la fuente de alimentación principal por una nueva, dado que el transformador original se encontraba irreparablemente quemado. Sobre la placa principal, se reconstruyeron las pistas de la etapa del motor que habían sido comidas por el químico, restableciendo la continuidad eléctrica, y se reemplazó el potenciómetro dañado por corrosión. Como medida preventiva ante una futura recurrencia, se diseñó e imprimió en 3D una pieza antisalpicaduras para proteger la placa de nuevos derrames.",
    beneficios: [
        "Recuperación total de la funcionalidad del equipo a bajo costo frente a su reemplazo.",
        "Eliminación de la causa raíz de la falla mediante la protección antisalpicaduras diseñada a medida.",
        "Mayor vida útil del equipo ante futuros derrames de reactivos."
    ],
    imagenes: ["reparacion-agitador-calentador-dlab-01.webp", "reparacion-agitador-calentador-dlab-02.webp", "reparacion-agitador-calentador-dlab-03.webp", "reparacion-agitador-calentador-dlab-04.webp", "reparacion-agitador-calentador-dlab-05.webp", "reparacion-agitador-calentador-dlab-06.webp", "reparacion-agitador-calentador-dlab-07.webp"]
}
];