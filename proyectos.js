const proyectos = [
    {
        id: "1",
        tipo: "desarrollo",
        badge: "2026",
        titulo: "Diseño de sistema adquisición de datos para cromatógrafo",
        descripcionCorta: "Integración de electrónica para adquisión de sensores analógicos y software para el análisis y postprocesado de estos datos en cromatografos de gases.",
        tagCategoria: "MICROCONTROLADORES",
        tagFecha: "2026-06",
        tecnologias: ["Microcontrolador", "Integración con Software", "Adquisición de alta precisión y velocidad"],
        necesidad: "Se requería modernizar el sistema de lectura de un cromatógrafo de gases, reemplazando el registro obsoleto por un sistema digital que permitiera la captura, almacenamiento y análisis de datos en tiempo real de forma confiable.",
        solucion: "Se diseñó y ensambló una placa de adquisición de datos (DAQ) a medida, utilizando microcontroladores y conversores ADC de alta resolución, integrada a un software de escritorio desarrollado para el postprocesado de la información.",
        beneficios: [
            "Mayor precisión en la lectura de picos cromatográficos.",
            "Automatización del almacenamiento y gestión de resultados.",
            "Reducción drástica de tiempos de análisis y exportación directa a formato digital."
        ],
        // Extensiones actualizadas a .webp
        imagenes: ["croma2.webp", "croma1.webp", "croma3.webp"]
    },
    {
        id: "2",
        tipo: "desarrollo",
        badge: "2026",
        titulo: "Diseño y desarrollo de bioreactor para fotocatálisis",
        descripcionCorta: "Desarrollo y ensamble de hardware para fuentes de alimentación, brazos mecánicos y bancos de pruebas con conectividad múltiple.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2026-05",
        tecnologias: ["Electrónica Analógica", "Impresión 3D", "Diseño PCB"],
        necesidad: "Necesidad de diseño de un reactor cilíndrico para fotocatálisis que requería iluminación uniforme de 360 grados con longitud de onda y potencia variable, a su vez mantenimiento de temperatura interna por debajo de los 60°C (límite estructural del PLA).",
        solucion: "Fabricación de un dispositivo con control independiente de intensidad por longitud de onda (R, G, B) compatible estructuralmente con un agitador magnético inferior.",
        beneficios: [
            "Control térmico eficiente que previene la deformación del PLA.",
            "Iluminación homogénea optimizando la reacción fotocatalítica.",
            "Interfaz amigable y modularidad para futuras expansiones."
        ],
        imagenes: ["Fotoreactor1.webp", "Fotoreactor2.webp", "Fotoreactor3.webp"]
    },
    {
        id: "3",
        tipo: "desarrollo",
        badge: "2026",
        titulo: "Diseño y desarrollo de Dispositivo cromatografía TLC",
        descripcionCorta: "Desarrollo y ensamble de Dispositivo para cromatografía TLC con Modulación PWM buck para LEDs UV (385nm/420nm).",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2026-04",
        tecnologias: ["Electrónica Analógica", "Impresión 3D", "Diseño PCB"],
        necesidad: "Se necesitaba un dispositivo para realizar cromatografías TLC, lo cual necesitaba iluminar con fotones de diferentes longitudes de onda, para este caso se controlaron 2 juegos leds de 385nm/420nm respectivamente, a su vez se incorporó un calce mecanico para acoplar tubos de 254 y 300nm. A su vez era imperativo que la estructura del dispositivo fuese totalmente opaca, para así evitar fugas de luz.",
        solucion: "Fabricación de un dispositivo con control independiente de intensidad por longitud de onda (385nm/420nm), compatible mecanicamente con tubos de otras longitudes de onda. A su vez la estructura es compatible para registrar el proceso de cromatografía mediante un smartphone/camara.",
        beneficios: [
            "Dispositivo funcional, compacto y de muy bajo costo.",
            "Iluminación homogénea optimizando la reacción fotocatalítica.",
            "Estructura compatible con múltiples tubos de iluminación y formas de registro."
        ],
        imagenes: ["TLC1.webp", "TLC5.webp", "TLC2.webp", "TLC3.webp", "TLC4.webp"]
    },
    {
        id: "4",
        tipo: "desarrollo",
        badge: "2026",
        titulo: "Desarrollo de equipo potencioestato portatil",
        descripcionCorta: "Desarrollo de un potenciostato destinado a Espectroscopía de Impedancia Electroquímica (EIS), Ciclovotamperometría (CV) y Chronoamperometría (CA) portatil, tanto el software de control en PC (HMI) como el firmware de adquisición.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2026-08",
        tecnologias: ["Front-end analógico AD5940", "Impresión 3D", "Procesamiento matemático", "Diseño de PCB","Integración con software"],
        necesidad: "Se requería un potencioestato para el análisis de muestras electroquimicas, debido al alto costo de estos (~10000USD) y la dificultad de conseguirlos en el país, se nos solicitó desarrollar uno desde cero.",
        solucion: "Desarrollo de un equipo compacto y portátil, con las especificaciones de equipos comerciales a una fracción del precio de estos. Se desarrolló tanto el circuito eléctrico (basado en un AFE AD5940) con alimentación USB, así como el backend necesario para utilizarse mediante un microcontrolador. También se desarrolló el software HMI para la utilización del operario, priorizando la facilidad del uso del mismo.",
        beneficios: [
            "Dispositivo con precisión y exactitud de equipos comerciales.",
            "Costo final de un 30% respecto a equipos de la misma capacidad.",
            "Equipo compacto y de bajo consumo, ideal para utilizarse en análisis de campo."
        ],
        imagenes: ["Pot1.webp", "Pot2.webp", "Pot3.webp", "Pot4.webp"]
    },
    {
        id: "5",
        tipo: "desarrollo",
        badge: "2025",
        titulo: "Desarrollo de digestor Kjeldahl de multiples bloques",
        descripcionCorta: "Diseño y Construcción de Digestor Kjeldahl de 3 Posiciones con Control Individual de hasta 400W por bloque.",
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
        imagenes: ["KHJ1.webp", "KHJ3.webp", "KHJ4.webp", "KHJ6.webp"]
    },
    {
        id: "6",
        tipo: "armado",
        badge: "2026",
        titulo: "Controlador de temperatura PID",
        descripcionCorta: "Se realizó el diseño de la estructura y conexión eléctrica para un controlador de temperatura, se eligió un control PID para asegurar el cumplimiento del proceso.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2026-06",
        
        tecnologias: ["Control PID", "Diseño de estructura", "Conexión eléctrica"],
        necesidad: "Se requería un sistema confiable para el control de temperatura del proceso.",
        solucion: "Se armó un controlador PID asegurando el cumplimiento de las variables térmicas requeridas.",
        beneficios: [
            "Mayor precisión en el control de temperatura.",
            "Cumplimiento estricto del proceso."
        ],
        
        imagenes: ["PID1.webp", "PID2.webp", "PID3.webp", "PID4.webp"]
    },
    {
        id: "7",
        tipo: "armado",
        badge: "2025",
        titulo: "Calentador e instalación electrica para planta piloto",
        descripcionCorta: "Diseño de un calentador de agua para extracción de aceite de uva en planta piloto, en conjunto con esto se realizó la instalación electrica del controlador de temperatura y los tableros de alimentación necesarios.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2025-05",
        
        tecnologias: ["Control de temperatura", "Diseño de tablero eléctrico", "Conexión eléctrica"],
        necesidad: "Se requería un sistema para calentar agua y controlar con precisión la temperatura de la misma, en conjunto con esto se necesitaba el tablero de conexión.",
        solucion: "Se armó el calentador basado en una resistencia eléctrica comercial, priorizando el mantenimiento de la misma, la estructura de esta fue realizada en acero inoxidable debido a la necesidad de estar constantemente en agua. Se aisló térmica y electricamente el exterior del recipiente para asegurar la seguridad del personal, la instalación y el proceso. Junto con esto se armó el tablero eléctrico y el controlador de temperatura.",
        beneficios: [
            "Control preciso de la temperatura, utilizando controlador mediante SSR.",
            "Sostenibilidad en el tiempo, asegurando la facilidad de mantener el calentador."
        ],
        
        imagenes: ["Planta (2).webp", "Planta (5).webp", "Planta (6).webp", "Planta (1).webp", "Planta (3).webp"]
    },
    {
        id: "8",
        tipo: "desarrollo",
        badge: "2025",
        titulo: "Diseño y Prototipado de Manta Calefactora Flexible",
        descripcionCorta: "Diseño de un calentador de agua para extracción de aceite de uva en planta piloto, en conjunto con esto se realizó la instalación electrica del controlador de temperatura y los tableros de alimentación necesarios.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2025-10",
        
        tecnologias: ["Control de temperatura", "Calentadores flexibles", "Aislamiento térmico"],
        necesidad: "Necesidad de aplicar calor controlado en superficies con geometría irregular o cilíndrica (ej. columnas de cromatografía) donde las placas rígidas no son viables. Se requiere un elemento flexible, capaz de soportar altas temperaturas y con aislamiento eléctrico robusto.",
        solucion: "El desarrollo comenzó con el diseño teórico de una carga resistiva de 73 Ω, empleando 13 metros de alambre de Nicrom de 0.5 mm para proyectar una potencia de 660 W (3 A). Para su manufactura, el conductor fue encapsulado en vainas de fibra de vidrio y tejido en un patrón de serpentina sobre una malla estructural. Durante las pruebas de carga, se detectó que la potencia nominal generaba temperaturas excesivas en los puntos de cruce, creando zonas de calor crítico (hotspots). Para mitigar este problema, se aplicó un ajuste operativo limitando la alimentación a 2.2 A (400 W), lo que permitió estabilizar la temperatura máxima en 400 °C dentro de los puntos críticos. Finalmente, el equipo superó la validación mediante una prueba de estabilidad térmica a 300 W, logrando mantener una temperatura constante de 270 °C sobre el objeto de ensayo.",
        beneficios: [
            "El diseño prioriza la seguridad operativa mediante un doble aislamiento físico.",
            "La flexibilidad del tejido permite que la manta se adapte a radios de curvatura pequeños sin estresar mecánicamente al conductor interno."
        ],
        
        imagenes: ["Manta (4).webp", "Manta (2).webp", "manta (3).webp", "Manta (6).webp", "Manta (1).webp"]
    },
    {
        id: "9",
        tipo: "reparacion",
        badge: "2025",
        titulo: "Reparación Integral y Rediseño de Interfaz HMI - Cromatógrafo HPLC Konik A5000",
        descripcionCorta: "Diagnóstico y reparación de cromatografo líquido Konik, desde la parte electrónica hasta el rediseño del interfaz HMI.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2025-10",
        
        tecnologias: ["Electrónica analógica","Diseño HMI"],
        necesidad: "El equipo se encontraba inoperativo. La etapa de potencia (bombas hidráulicas y elementos calefactores) encendía correctamente, pero la etapa de control lógico y la Interfaz Hombre-Máquina (HMI) no daban respuesta, impidiendo cualquier configuración o uso del equipo.",
        solucion: "El proceso comenzó con el despiece completo del equipo para su inspección visual, donde se detectaron daños físicos severos por carbonización en los pines de comunicación y resistencias limitadoras abiertas; evidencias claras de una falla catastrófica provocada por un cortocircuito o una conexión externa errónea. Para solucionarlo, primero se sanearon las pistas de la placa (PCB), asegurando la continuidad mediante el reemplazo de los pines dañados con soldadura directa de cableado. Luego, el diagnóstico de la interfaz (HMI) permitió rastrear la falla hasta la lógica de control, por lo que se reemplazaron dos circuitos integrados fundamentales (un SN7442 y un ULN2003) encargados del manejo de los displays y la multiplexación. Finalmente, debido a que el teclado de membrana original presentaba daños irreversibles, se aplicó ingeniería inversa sobre su matriz para diseñar y fabricar un módulo completamente nuevo, desarrollando desde la electrónica de los pulsadores y la gráfica del panel frontal, hasta su adaptación mecánica definitiva en el chasis original.",
        beneficios: [
            "El diseño prioriza la seguridad operativa mediante un doble aislamiento físico.",
            "La flexibilidad del tejido permite que la manta se adapte a radios de curvatura pequeños sin estresar mecánicamente al conductor interno."
        ],
        
        imagenes: ["hplc (1).webp", "hplc (5).webp", "hplc (2).webp", "hplc (3).webp"]
    },
    {
    id: "11",
    tipo: "desarrollo",
    badge: "2024",
    titulo: "Desarrollo de agitador vertical de laboratorio con control PWM",
    descripcionCorta: "Diseño y ensamble de agitador vertical de 1500 RPM con motor brushless, regulación de velocidad por PWM y timer configurable para control del tiempo de funcionamiento.",
    tagCategoria: "VALIDACIÓN",
    tagFecha: "2024-06",
    tecnologias: ["Motor Brushless", "Control PWM", "Impresión 3D", "Timer de proceso"],
    necesidad: "Se requería un agitador vertical de laboratorio capaz de sostener un torque constante durante todo el rango de velocidades, con una regulación fina y continua de las revoluciones, además de un control de tiempo de funcionamiento para automatizar el proceso de agitación.",
    solucion: "Se desarrolló un agitador vertical con motor brushless de 1500 RPM y 0,8 Kg/cm de torque, regulado mediante PWM, lo que permite mantener en gran parte el torque inicial con una variación prácticamente continua/finita de las revoluciones. Se incorporó un timer para setear el tiempo de funcionamiento del equipo, y un sistema de regulación de posición con ajuste tanto de verticalidad como de horizontalidad. El uso de un motor brushless garantiza una gran durabilidad para uso continuo.",
    beneficios: [
        "Torque prácticamente constante en todo el rango de velocidades gracias al control PWM.",
        "Alta durabilidad para uso continuo gracias al motor brushless.",
        "Ajuste de posición en vertical y horizontal, y timer integrado para automatizar el proceso."
    ],
    imagenes: ["agitador (1).webp", "agitador (2).webp", "agitador (3).webp", "agitador (4).webp", "agitador (6).webp", "agitador (5).webp"]
    },
    {
        id: "10",
        tipo: "armado",
        badge: "2025",
        titulo: "Controlador de temperatura PID",
        descripcionCorta: "Se realizó el diseño de la estructura y conexión eléctrica para un controlador de temperatura, se eligió un control PID para asegurar el cumplimiento del proceso.",
        tagCategoria: "VALIDACIÓN",
        tagFecha: "2025-05",
        
        tecnologias: ["Control PID", "Diseño de estructura", "Conexión eléctrica"],
        necesidad: "Se requería un sistema confiable para el control de temperatura del proceso.",
        solucion: "Se armó un controlador PID asegurando el cumplimiento de las variables térmicas requeridas.",
        beneficios: [
            "Mayor precisión en el control de temperatura.",
            "Cumplimiento estricto del proceso."
        ],
        
        imagenes: ["PID2 (2).webp", "PID2 (3).webp", "PID2 (4).webp", "PID2 (1).webp"]
    },
    {
    id: "12",
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
    imagenes: ["Agitador-Repar (2).webp", "Agitador-Repar (1).webp", "Agitador-Repar (3).webp", "Agitador-Repar (4).webp", "Agitador-Repar (5).webp", "Agitador-Repar (6).webp", "Agitador-Repar (7).webp"]
}
];