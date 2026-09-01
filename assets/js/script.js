const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

applyTheme(storedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

const languageToggle = document.getElementById("languageToggle");
const FLAGS = { es: "🇬🇧", en: "🇪🇸" };
const LANG_LABELS = { es: "Switch to English", en: "Cambiar a español" };

const TRANSLATIONS = {
  es: {
    "index.title": "José Carlos Ruiz Sánchez · Desarrollador Full-stack",
    "skip": "Saltar al contenido",
    "themeToggle": "Cambiar tema",
    "navToggle": "Abrir menú",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia laboral",
    "nav.skills": "Habilidades",
    "nav.education": "Formación Académica",
    "nav.contact": "Contacto",
    "hero.role": "Desarrollador Full-stack",
    "hero.imageAlt": "Imagen de presentación",
    "hero.introTitle": "Sobre mí",
    "hero.introText":
      "Desarrollador full-stack. En prácticas construí en equipo, backend y frontend, un mapa interactivo que muestra la actividad de usuarios en el campus de la Universidad de Almería, con datos actualizados cada 2 minutos mediante ingesta automatizada. Fuera del ámbito académico desarrollo proyectos propios por iniciativa personal, entre ellos Tokimori, una aplicación de gestión de tareas.",
    "hero.contact": "Contactar",
    "hero.downloadCv": "Descargar currículum",
    "section.projects": "Proyectos",
    "section.experience": "Experiencia laboral",
    "section.skills": "Habilidades Técnicas",
    "carousel.prev": "Anterior",
    "carousel.next": "Siguiente",
    "projects.item1": "Proyecto 1",
    "projects.item2": "Proyecto 2",
    "projects.item3": "Proyecto 3",
    "projects.item4": "Proyecto 4",
    "projects.img1": "Imagen del proyecto 1",
    "projects.img2": "Imagen del proyecto 2",
    "projects.img3": "Imagen del proyecto 3",
    "projects.img4": "Imagen del proyecto 4",
    "experience.item1": "Desarrollador full-stack",
    "experience.img1": "Imagen del puesto de desarrollador full-stack en la Universidad de Almería",
    "cta.viewProjects": "Ver proyectos",
    "cta.viewExperience": "Ver experiencia",
    "cta.viewSkills": "Ver habilidades",
    "footer.email": 'Email: <a href="mailto:josecarlosruizsan@gmail.com">josecarlosruizsan@gmail.com</a>',
    "footer.phone": 'Teléfono: <a href="tel:+34608257574">+34 608257574</a>',

    "hab.title": "Habilidades · José Carlos Ruiz Sánchez",
    "hab.eyebrow": "Habilidades",
    "hab.h1": "Habilidades",
    "hab.lead": "Esta página desglosa mis competencias en cuatro planos (técnico, académico, transversal e idiomático), siguiendo la misma división que mi currículum. En cada apartado explico qué incluye y, siempre que es posible, enlazo la tecnología o la competencia con el proyecto real en el que la he utilizado, de modo que cualquier afirmación pueda contrastarse con un resultado concreto.",
    "hab.toc.tech": "Habilidades técnicas",
    "hab.toc.academic": "Habilidades académicas",
    "hab.toc.soft": "Habilidades transversales",
    "hab.toc.lang": "Idiomas",
    "hab.tech.title": "Habilidades técnicas",
    "hab.tech.desc": "Herramientas y lenguajes con los que trabajo de forma habitual. Mantengo la agrupación de mi CV (lenguajes, frameworks, bases de datos, automatización, DevOps, control de versiones y testing) y añado en cada tarjeta el contexto en el que los he aplicado. Para quien evalúa el perfil: cada bloque describe mi nivel real de autonomía, no una simple lista de palabras clave.",
    "hab.card.lang.h3": "Lenguajes de programación",
    "hab.card.lang.p": "JavaScript y TypeScript son mi base tanto en backend como en frontend; uso el tipado estático de TypeScript para modelar el dominio y detectar errores antes de ejecutar. Python lo utilizo para modelos de datos e IA, y R para análisis estadístico.",
    "hab.card.lang.applied": "<span>Dónde lo he aplicado</span> API de las prácticas en JavaScript/TypeScript, modelo predictivo de burnout en Python y microservicios de Auscultify combinando Python y JavaScript.",
    "hab.card.fw.h3": "Frameworks y tecnologías",
    "hab.card.fw.p": "Construyo APIs REST con Node.js y Express.js, e interfaces con React y Next.js (renderizado en servidor y rutas dinámicas). Spark lo utilizo para procesamiento distribuido sobre varios nodos.",
    "hab.card.fw.applied": "<span>Dónde lo he aplicado</span> Frontend del mapa interactivo del campus en Next.js y React, API en Node.js + Express.js durante las prácticas, y despliegue de un modelo sobre un clúster de nodos con Spark en el Predictor de burnout.",
    "hab.card.db.h3": "Bases de datos",
    "hab.card.db.p": "En SQL modelo esquemas relacionales, escribo consultas y cuido los índices (MySQL y PostgreSQL). Con la extensión PostGIS trabajo consultas espaciales sobre datos geográficos.",
    "hab.card.db.applied": "<span>Dónde lo he aplicado</span> Almacenamiento y consulta espacial de ~3.000 filas cada 2 minutos en PostgreSQL/PostGIS durante las prácticas; MySQL como base de datos de Tokimori.",
    "hab.card.auto.h3": "Automatización de procesos",
    "hab.card.auto.p": "Diseño flujos en n8n para conectar servicios, APIs y bases de datos y para lanzar procesos de ingesta programados sin necesidad de escribir y mantener un servicio dedicado. Es la pieza que mantiene los datos frescos de forma desatendida.",
    "hab.card.auto.applied": "<span>Dónde lo he aplicado</span> Pipeline de telemetría geoespacial del campus: ingesta automatizada cada 2 minutos hacia PostGIS.",
    "hab.card.devops.h3": "DevOps y despliegue",
    "hab.card.devops.p": "Contenerizo aplicaciones con Docker e imágenes reproducibles, orquesto varios servicios en local con docker-compose y preparo entornos idénticos en desarrollo y despliegue para eliminar el «en mi máquina funciona». Sirvo las aplicaciones detrás de Nginx como servidor web y proxy inverso.",
    "hab.card.devops.applied": "<span>Dónde lo he aplicado</span> Despliegue en Docker de la aplicación desarrollada en las prácticas y publicación con Nginx de la página de las prácticas de empresa extracurriculares; este mismo portfolio incluye Dockerfile y docker-compose.",
    "hab.card.vcs.h3": "Control de versiones",
    "hab.card.vcs.p": "Uso Git en flujo colaborativo: ramas por funcionalidad, revisión de cambios, resolución de conflictos y un historial de commits legible. Es la base sobre la que coordino el trabajo cuando el proyecto es de varias personas.",
    "hab.card.vcs.applied": "<span>Dónde lo he aplicado</span> Todos mis proyectos; coordinación del reparto backend/frontend con el equipo en las prácticas y en el Trabajo de Fin de Grado.",
    "hab.card.test.h3": "Testing",
    "hab.card.test.p": "Escribo tests automáticos en JavaScript con Jest, tanto para APIs de Node.js (casos unitarios y pruebas de integración sobre los endpoints) como para interfaces de React con React Testing Library (render de componentes e interacción del usuario). El objetivo es que un fallo se detecte en cuanto se introduce y no en cliente.",
    "hab.card.test.applied": "<span>Dónde lo he aplicado</span> Pruebas de la API en Node.js y de la interfaz en React durante las prácticas (entorno profesional), y tests de la lógica de Tokimori como proyecto personal.",
    "hab.card.testgrado.h3": "Pruebas de software durante el Grado",
    "hab.card.testgrado.p": "En el Grado en Ingeniería Informática practiqué la verificación de software sobre varias tecnologías: tests unitarios con JUnit sobre código Java, pruebas de servicios en Spring, pruebas de componentes en Angular y validación de operaciones sobre bases de datos MongoDB y Cassandra. Aquí aprendí a decidir qué hay que probar y a usar la cobertura de código como criterio de calidad.",
    "hab.card.testgrado.applied": "<span>Dónde lo he aplicado</span> Solo en asignaturas del Grado en Ingeniería Informática (Universidad de Almería); todavía no lo he trasladado a un entorno profesional.",
    "hab.tag.apiIntegration": "Integración de APIs",
    "hab.tag.scheduledIngestion": "Ingesta programada",
    "hab.tag.reproducibleEnvs": "Entornos reproducibles",
    "hab.tag.featureBranches": "Ramas por funcionalidad",
    "hab.tag.collaboration": "Trabajo colaborativo",
    "hab.tag.unitTests": "Tests unitarios",
    "hab.tag.integrationTests": "Tests de integración",
    "hab.academic.title": "Habilidades académicas",
    "hab.academic.desc": "Competencias que provienen directamente de mi formación: el Grado en Ingeniería Informática (Universidad de Almería, 2021-2026) con doble mención en Ingeniería del Software y Sistemas de Información, y el Máster en Ingeniería Informática con especialidad en Big Data; y de mi actividad en un grupo de investigación. No son herramientas concretas, sino la forma de abordar un problema con rigor: analizarlo, diseñar una solución, medirla y comunicarla.",
    "hab.academic.se.h3": "Ingeniería del Software",
    "hab.academic.se.p": "Análisis y especificación de requisitos, patrones de diseño, arquitecturas (incluida la de microservicios), modelado UML y criterios de calidad y mantenibilidad. Es la mención que orienta cómo estructuro un proyecto antes de escribir la primera línea de código.",
    "hab.academic.is.h3": "Sistemas de Información",
    "hab.academic.is.p": "Modelado conceptual de datos, procesos de negocio e integración entre sistemas heterogéneos. Me permite entender el dominio y las necesidades reales de quien usará el sistema, no solo su parte técnica.",
    "hab.academic.bd.h3": "Big Data (especialidad del Máster)",
    "hab.academic.bd.p": "Procesamiento distribuido con Spark, diseño de pipelines de datos, cómputo en clúster y razonamiento sobre escalabilidad y volumen cuando los datos no caben ni se procesan en una sola máquina.",
    "hab.academic.ml.h3": "Modelado y aprendizaje automático",
    "hab.academic.ml.p": "Construcción, entrenamiento y evaluación de modelos predictivos en Python y diseño de algoritmos de recomendación. Aplicado en el Predictor de burnout y en Auscultify.",
    "hab.academic.research.h3": "Método científico e investigación",
    "hab.academic.research.p": "Trabajo en un grupo de investigación de la UAL: formulación de hipótesis, experimentación controlada, medición de resultados e iteración a partir de los datos obtenidos.",
    "hab.academic.comm.h3": "Comunicación técnica y defensa",
    "hab.academic.comm.p": "Redacción de memorias técnicas y defensa oral ante tribunal. Mi Trabajo de Fin de Grado (Auscultify) obtuvo una calificación de 9,4/10.",
    "hab.academic.algo.h3": "Pensamiento algorítmico y análisis de complejidad",
    "hab.academic.algo.p": "Descomposición de problemas, elección de estructuras de datos y evaluación del coste de una solución antes de implementarla.",
    "hab.academic.note": "<strong>Para quien evalúa el perfil:</strong> estas competencias son la razón por la que puedo incorporarme a un proyecto o a un dominio nuevo, entenderlo con rapidez y justificar cada decisión técnica, en lugar de limitarme a implementar una especificación cerrada.",
    "hab.soft.title": "Habilidades transversales",
    "hab.soft.desc": "Las que en mi CV aparecen como «Habilidades». Las incluyo con una evidencia concreta detrás de cada una, porque enunciadas a secas dicen poco de nadie.",
    "hab.soft.team.h3": "Trabajo en equipo",
    "hab.soft.team.p": "Las prácticas y el TFG se desarrollaron en equipo, con un reparto explícito de backend y frontend y coordinación diaria mediante Git y revisiones de código.",
    "hab.soft.analytical.h3": "Pensamiento analítico",
    "hab.soft.analytical.p": "Descompongo un problema en partes medibles antes de resolverlo; es la base de mi trabajo con datos y con modelos predictivos.",
    "hab.soft.time.h3": "Gestión del tiempo",
    "hab.soft.time.p": "Compaginé el Máster, que es online, con el puesto en el Applied Computing Group, y lo combino con proyectos propios como Tokimori, priorizando tareas y fijando entregas realistas. Es compatible con una jornada laboral completa.",
    "hab.soft.learning.h3": "Aprendizaje continuo",
    "hab.soft.learning.p": "He incorporado n8n, PostGIS, Spark y Next.js por necesidad de cada proyecto, aprendiéndolos de forma autónoma y llevándolos hasta producción.",
    "hab.lang.title": "Idiomas",
    "hab.lang.desc": "Nivel de comunicación en entornos técnicos y profesionales.",
    "hab.lang.es.name": "Español",
    "hab.lang.es.level": "Nativo",
    "hab.lang.es.p": "Lengua materna.",
    "hab.lang.en.name": "Inglés",
    "hab.lang.en.level": "B2 · Cambridge First (FCE)",
    "hab.lang.en.p": "Lectura fluida de documentación y especificaciones técnicas, y comunicación escrita y oral en entornos profesionales.",
    "hab.lang.note": '<strong>Nota:</strong> cada tecnología de esta página está respaldada por un proyecto de la sección <a href="proyectos.html">Proyectos</a> o por mi <a href="experiencia.html">Experiencia laboral</a>. Si algo no aparece aquí es, casi siempre, porque todavía no lo he usado en un entorno real.',

    "for.title": "Formación Académica · José Carlos Ruiz Sánchez",
    "for.eyebrow": "Formación",
    "for.h1": "Formación Académica",
    "for.lead": "Esta página detalla mi formación reglada siguiendo la misma división que mi currículum: las titulaciones cursadas en la Universidad de Almería, el Trabajo de Fin de Grado y su calificación, y las certificaciones de idiomas. Incluye además una explicación del solapamiento de fechas entre el Grado y el Máster, para que las fechas del CV se entiendan sin ambigüedad.",
    "for.toc.degrees": "Titulaciones",
    "for.toc.tfg": "Trabajo de Fin de Grado",
    "for.toc.overlap": "Solapamiento Grado y Máster",
    "for.toc.certs": "Certificaciones",
    "for.degrees.title": "Titulaciones",
    "for.degrees.desc": "Toda mi formación universitaria se ha cursado en la Universidad de Almería. El Máster arrancó antes de cerrar formalmente el Grado.",
    "for.master.period": "Desde 2025 · en curso",
    "for.master.h3": "Máster en Ingeniería Informática",
    "for.master.place": "Universidad de Almería",
    "for.master.p": "Especialidad en Big Data (infraestructura y bases de datos a gran escala, análisis de grandes volúmenes de datos y procesamiento distribuido), uno de los tres itinerarios del máster junto a Internet de las cosas y desarrollo web/móvil. Es 100% online y compatible con una jornada laboral completa.",
    "for.master.tag1": "Especialidad en Big Data",
    "for.master.tag2": "En curso",
    "for.grado.period": "2021-2026",
    "for.grado.h3": "Grado en Ingeniería Informática",
    "for.grado.place": "Universidad de Almería",
    "for.grado.p": "Doble mención en Ingeniería del Software y en Sistemas de Información. Formación en análisis y diseño de software, arquitecturas, bases de datos, modelado de sistemas de información y trabajo en proyectos de equipo.",
    "for.grado.tag1": "Mención en Ingeniería del Software",
    "for.grado.tag2": "Mención en Sistemas de Información",
    "for.tfg.title": "Trabajo de Fin de Grado",
    "for.tfg.desc": "El Grado se cierra con un Trabajo de Fin de Grado desarrollado en equipo y defendido ante tribunal.",
    "for.tfg.h3": "Auscultify",
    "for.tfg.grade": "Calificación: 9,4 / 10",
    "for.tfg.p": "Proyecto desarrollado en equipo, con reparto explícito de backend y frontend y coordinación por Git. Incluyó modelado de datos, microservicios y un algoritmo de recomendación, además de la redacción de la memoria técnica y la defensa oral.",
    "for.tfg.p2": "Lo defendí en la convocatoria de febrero de 2026. Por eso el Grado figura como finalizado en 2026, aunque el resto de asignaturas estaban superadas antes.",
    "for.overlap.title": "Solapamiento entre Grado y Máster",
    "for.overlap.desc": "Aclaración sobre las fechas del currículum: entre el final del Grado y el inicio del Máster hay unos meses de solapamiento. Este es el motivo.",
    "for.overlap.i1.h3": "Matrícula del Máster con el TFG pendiente",
    "for.overlap.i1.p": "Empecé el Máster en Ingeniería Informática teniendo pendientes únicamente los créditos del Trabajo de Fin de Grado. Me matriculé con el resto del expediente del Grado ya superado para no perder un curso completo.",
    "for.overlap.i2.h3": "Defensa del TFG en febrero",
    "for.overlap.i2.p": "El Trabajo de Fin de Grado lo defendí en la convocatoria de febrero de 2026. Hasta esa fecha el Grado constaba como no finalizado pese a tener el resto del expediente aprobado.",
    "for.overlap.i3.h3": "Cómo se refleja en el CV",
    "for.overlap.i3.p": "De ahí que el currículum muestre el Grado terminando en 2026 y el Máster empezando unos meses antes: no son dos periodos independientes, sino esa transición.",
    "for.overlap.note": "<strong>Para quien evalúa el perfil:</strong> el solapamiento de fechas entre el Grado y el Máster no es un error del currículum. Se debe a haber cursado el último tramo del Grado (la defensa del TFG, en febrero de 2026) cuando ya estaba matriculado en el Máster.",
    "for.certs.title": "Certificaciones e idiomas",
    "for.certs.desc": "Certificaciones oficiales de idiomas. El detalle de mi nivel de comunicación en entornos técnicos está en la página de Habilidades.",
    "for.cert.fce.h3": "Cambridge English: First (FCE)",
    "for.cert.fce.grade": "Nivel B2 (MCER)",
    "for.cert.fce.p": "Certificado de inglés de nivel B2 según el Marco Común Europeo de Referencia. Lo uso para lectura de documentación y especificaciones técnicas y para comunicación escrita y oral en entornos profesionales.",
    "for.note": '<strong>Nota:</strong> el detalle técnico de lo que he aprendido en cada titulación está en <a href="habilidades.html">Habilidades</a>, y su aplicación en proyectos reales, en <a href="experiencia.html">Experiencia laboral</a> y <a href="proyectos.html">Proyectos</a>.',

    "exp.title": "Experiencia laboral · José Carlos Ruiz Sánchez",
    "exp.eyebrow": "Experiencia laboral",
    "exp.h1": "Experiencia laboral",
    "exp.lead": "Esta página recoge mi experiencia laboral como una cronología, siguiendo la misma división que mi currículum. De momento incluye un único puesto: desarrollador full-stack en el Applied Computing Group (ACG) de la Universidad de Almería. El detalle técnico de cada puesto se amplía en su propia página.",
    "exp.timeline.title": "Cronología",
    "exp.timeline.desc": "Mis puestos ordenados en el tiempo. Usa el buscador para filtrar por empresa, rol o tecnología, y el desplegable para cambiar el orden.",
    "exp.search.label": "Buscar",
    "exp.search.placeholder": "Empresa, rol o tecnología",
    "exp.sort.label": "Ordenar",
    "exp.sort.newest": "Más recientes primero",
    "exp.sort.oldest": "Más antiguos primero",
    "exp.empty": "No hay experiencias que coincidan con la búsqueda.",
    "exp.item.period": "Febrero 2026 – Agosto 2026",
    "exp.item.h3": "Desarrollador full-stack",
    "exp.item.place": "Applied Computing Group (ACG) · Universidad de Almería",
    "exp.item.p": "Construcción en equipo, backend y frontend, de un mapa interactivo que muestra la actividad de usuarios en el campus de la Universidad de Almería, con datos actualizados cada 2 minutos mediante ingesta automatizada.",
    "exp.item.b1": "Desarrollo de una API en el backend en Node.js con Express.js.",
    "exp.item.b2": "Frontend en Next.js: mapa interactivo con visualización de la actividad de usuarios sobre el plano del campus.",
    "exp.item.b3": "Pipeline de telemetría geoespacial del campus: ingesta de ~3.000 filas cada 2 minutos automatizada con n8n, con almacenamiento y consulta espacial en PostGIS.",
    "exp.item.b4": "Despliegue en Docker.",
    "exp.item.cta": "Ver detalle del puesto",

    "con.title": "Contacto · José Carlos Ruiz Sánchez",
    "con.eyebrow": "Contacto",
    "con.h1": "Contacto",
    "con.lead": "Esta página reúne en un solo sitio todo lo que necesitas para ponerte en contacto conmigo y para valorar si encajo en tu proceso: los canales por los que puedes contactarme, mi disponibilidad real de incorporación y las respuestas a las preguntas que suelen surgir en una primera toma de contacto. Sigue la misma división que mi currículum y todos los datos coinciden con el pie de esta web.",
    "con.action.call": "Llámame",
    "con.action.email": "Enviar un correo",
    "con.action.cv": "Descargar currículum (PDF)",
    "con.toc.channels": "Canales de contacto",
    "con.toc.availability": "Disponibilidad",
    "con.toc.faq": "Preguntas frecuentes",
    "con.channels.title": "Canales de contacto",
    "con.channels.desc": "Los mismos datos que aparecen en el pie de esta web y en mi CV. Para una primera toma de contacto prefiero una llamada.",
    "con.channel.phone": "Teléfono",
    "con.channel.email": "Correo electrónico",
    "con.channel.linkedin": "LinkedIn",
    "con.channel.github": "GitHub",
    "con.avail.title": "Disponibilidad",
    "con.avail.desc": "Tal y como figura en mi currículum, desglosada aquí para que se entienda sin ambigüedad qué puedo ofrecer desde el primer día.",
    "con.avail.start.h3": "Incorporación inmediata",
    "con.avail.start.p": "Puedo empezar sin periodo de preaviso. Actualmente curso el Máster en Ingeniería Informática, compatible con jornada laboral completa.",
    "con.avail.mode.h3": "Modalidad flexible",
    "con.avail.mode.p": "Presencial, híbrida o remota, según lo que necesite el equipo. Ya he trabajado en remoto con coordinación diaria por Git y revisiones de código durante mis prácticas.",
    "con.avail.mobility.h3": "Movilidad geográfica",
    "con.avail.mobility.p": "Con base en Málaga y con posibilidad de movilización a cualquier punto de España para un puesto presencial o híbrido.",
    "con.avail.hours.h3": "Jornada e idioma de trabajo",
    "con.avail.hours.p": "Disponible a jornada completa. Idioma de trabajo español; inglés B2 (Cambridge First) para documentación y comunicación en entornos técnicos.",
    "con.faq.title": "Preguntas frecuentes",
    "con.faq.desc": "Las dudas que suelen aparecer en una primera conversación, resueltas de antemano para ahorrar el correo de ida y vuelta.",
    "con.faq.q1.h3": "¿Cuál es la mejor forma de contactarte?",
    "con.faq.q1.p": 'Una llamada al <a href="tel:+34608257574">+34 608 25 75 74</a>. Si lo prefieres por escrito, escríbeme a <a href="mailto:josecarlosruizsan@gmail.com">josecarlosruizsan@gmail.com</a>.',
    "con.faq.q2.h3": "¿Estás disponible ya? ¿Cómo lo compaginas con el Máster?",
    "con.faq.q2.p": "Sí: incorporación inmediata y a jornada completa. El Máster en Ingeniería Informática que curso es 100% online y no exige asistencia presencial, así que puede organizarse fuera del horario laboral y no interfiere con un puesto presencial, híbrido o remoto.",
    "con.faq.q3.h3": "¿Trabajas en remoto?",
    "con.faq.q3.p": "Sí, y también presencial o híbrido. Ya he trabajado en remoto con un equipo repartido, coordinándonos por Git y revisiones de código.",
    "con.faq.q4.h3": "¿Puedo ver tu código?",
    "con.faq.q4.p": 'Parte está publicada en <a href="https://github.com/jrs407">github.com/jrs407</a>, junto al código de este portfolio. Algunos proyectos tienen el repositorio privado: puedo dar acceso de lectura, pero necesito que me lo pidáis primero (por llamada o correo) para conceder el permiso. En <a href="proyectos.html">Proyectos</a> tienes el contexto de cada uno.',
    "con.faq.q5.h3": "¿Tienes CV en PDF?",
    "con.faq.q5.p": 'Sí: <a href="assets/cv/CV - Jose Carlos Ruiz Sanchez.pdf" download>descárgalo aquí</a>. Esta web amplía cada sección de ese documento con contexto real.',
    "con.note": '<strong>Para quien evalúa el perfil:</strong> los datos de disponibilidad de esta página están actualizados a agosto de 2026. Si algo ha cambiado cuando la leas, o si necesitas una referencia, escríbeme y te respondo el mismo día laborable. Toda la información es coherente con mi <a href="assets/cv/CV - Jose Carlos Ruiz Sanchez.pdf" download>currículum en PDF</a>.'
  },
  en: {
    "index.title": "José Carlos Ruiz Sánchez · Full-stack Developer",
    "skip": "Skip to content",
    "themeToggle": "Toggle theme",
    "navToggle": "Open menu",
    "nav.about": "About me",
    "nav.projects": "Projects",
    "nav.experience": "Work experience",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.role": "Full-stack Developer",
    "hero.imageAlt": "Profile picture",
    "hero.introTitle": "About me",
    "hero.introText":
      "Full-stack developer. During my internship I built, as part of a team and across backend and frontend, an interactive map showing user activity across the University of Almería campus, with data refreshed every 2 minutes through automated ingestion. Outside academia I build my own projects on personal initiative, among them Tokimori, a task-management app.",
    "hero.contact": "Get in touch",
    "hero.downloadCv": "Download résumé",
    "section.projects": "Projects",
    "section.experience": "Work experience",
    "section.skills": "Technical Skills",
    "carousel.prev": "Previous",
    "carousel.next": "Next",
    "projects.item1": "Project 1",
    "projects.item2": "Project 2",
    "projects.item3": "Project 3",
    "projects.item4": "Project 4",
    "projects.img1": "Project 1 image",
    "projects.img2": "Project 2 image",
    "projects.img3": "Project 3 image",
    "projects.img4": "Project 4 image",
    "experience.item1": "Full-stack developer",
    "experience.img1": "Image of the full-stack developer role at the University of Almería",
    "cta.viewProjects": "View projects",
    "cta.viewExperience": "View experience",
    "cta.viewSkills": "View skills",
    "footer.email": 'Email: <a href="mailto:josecarlosruizsan@gmail.com">josecarlosruizsan@gmail.com</a>',
    "footer.phone": 'Phone: <a href="tel:+34608257574">+34 608257574</a>',

    "hab.title": "Skills · José Carlos Ruiz Sánchez",
    "hab.eyebrow": "Skills",
    "hab.h1": "Skills",
    "hab.lead": "This page breaks my competencies down into four planes (technical, academic, transferable and languages), following the same structure as my résumé. In each section I explain what it covers and, whenever possible, I link the technology or skill to the real project where I used it, so that any claim can be checked against a concrete result.",
    "hab.toc.tech": "Technical skills",
    "hab.toc.academic": "Academic skills",
    "hab.toc.soft": "Transferable skills",
    "hab.toc.lang": "Languages",
    "hab.tech.title": "Technical skills",
    "hab.tech.desc": "Tools and languages I work with on a regular basis. I keep the grouping from my résumé (languages, frameworks, databases, automation, DevOps, version control and testing) and add to each card the context in which I applied them. For anyone assessing the profile: each block describes my real level of autonomy, not just a list of keywords.",
    "hab.card.lang.h3": "Programming languages",
    "hab.card.lang.p": "JavaScript and TypeScript are my foundation on both backend and frontend; I use TypeScript's static typing to model the domain and catch errors before running. I use Python for data and AI models, and R for statistical analysis.",
    "hab.card.lang.applied": "<span>Where I've applied it</span> Internship API in JavaScript/TypeScript, predictive burnout model in Python, and Auscultify microservices combining Python and JavaScript.",
    "hab.card.fw.h3": "Frameworks and technologies",
    "hab.card.fw.p": "I build REST APIs with Node.js and Express.js, and interfaces with React and Next.js (server-side rendering and dynamic routes). I use Spark for distributed processing across multiple nodes.",
    "hab.card.fw.applied": "<span>Where I've applied it</span> Frontend of the interactive campus map in Next.js and React, API in Node.js + Express.js during the internship, and deployment of a model on a node cluster with Spark in the burnout Predictor.",
    "hab.card.db.h3": "Databases",
    "hab.card.db.p": "In SQL I model relational schemas, write queries and look after indexes (MySQL and PostgreSQL). With the PostGIS extension I work on spatial queries over geographic data.",
    "hab.card.db.applied": "<span>Where I've applied it</span> Storage and spatial querying of ~3,000 rows every 2 minutes in PostgreSQL/PostGIS during the internship; MySQL as Tokimori's database.",
    "hab.card.auto.h3": "Process automation",
    "hab.card.auto.p": "I design n8n workflows to connect services, APIs and databases and to launch scheduled ingestion processes without needing to write and maintain a dedicated service. It's the piece that keeps data fresh unattended.",
    "hab.card.auto.applied": "<span>Where I've applied it</span> Campus geospatial telemetry pipeline: automated ingestion every 2 minutes into PostGIS.",
    "hab.card.devops.h3": "DevOps and deployment",
    "hab.card.devops.p": "I containerize applications with Docker and reproducible images, orchestrate several services locally with docker-compose, and prepare identical environments in development and deployment to eliminate \"works on my machine\". I serve the applications behind Nginx as a web server and reverse proxy.",
    "hab.card.devops.applied": "<span>Where I've applied it</span> Docker deployment of the application built during the internship, and publishing the extracurricular company internship site with Nginx; this very portfolio includes a Dockerfile and docker-compose.",
    "hab.card.vcs.h3": "Version control",
    "hab.card.vcs.p": "I use Git in a collaborative flow: feature branches, change review, conflict resolution and a readable commit history. It's the basis on which I coordinate work when the project involves several people.",
    "hab.card.vcs.applied": "<span>Where I've applied it</span> All my projects; coordinating the backend/frontend split with the team during the internship and in my Bachelor's thesis.",
    "hab.card.test.h3": "Testing",
    "hab.card.test.p": "I write automated tests in JavaScript with Jest, both for Node.js APIs (unit cases and integration tests over the endpoints) and for React interfaces with React Testing Library (component rendering and user interaction). The goal is for a failure to be caught as soon as it's introduced and not at the client.",
    "hab.card.test.applied": "<span>Where I've applied it</span> Testing the Node.js API and the React interface during the internship (professional setting), and tests for Tokimori's logic as a personal project.",
    "hab.card.testgrado.h3": "Software testing during my Bachelor's",
    "hab.card.testgrado.p": "During my Bachelor's Degree in Computer Engineering I practised software verification across several technologies: unit tests with JUnit over Java code, testing of Spring services, component testing in Angular and validation of operations on MongoDB and Cassandra databases. This is where I learned to decide what needs testing and to use code coverage as a quality criterion.",
    "hab.card.testgrado.applied": "<span>Where I've applied it</span> Only in Bachelor's Degree courses in Computer Engineering (University of Almería); I haven't carried it over to a professional setting yet.",
    "hab.tag.apiIntegration": "API integration",
    "hab.tag.scheduledIngestion": "Scheduled ingestion",
    "hab.tag.reproducibleEnvs": "Reproducible environments",
    "hab.tag.featureBranches": "Feature branches",
    "hab.tag.collaboration": "Collaborative work",
    "hab.tag.unitTests": "Unit tests",
    "hab.tag.integrationTests": "Integration tests",
    "hab.academic.title": "Academic skills",
    "hab.academic.desc": "Competencies that come directly from my education: the Bachelor's Degree in Computer Engineering (University of Almería, 2021-2026) with a double specialization in Software Engineering and Information Systems, and the Master's Degree in Computer Engineering specializing in Big Data; and from my work in a research group. They are not specific tools, but the way to approach a problem rigorously: analyze it, design a solution, measure it and communicate it.",
    "hab.academic.se.h3": "Software Engineering",
    "hab.academic.se.p": "Requirements analysis and specification, design patterns, architectures (including microservices), UML modeling and quality and maintainability criteria. It's the specialization that guides how I structure a project before writing the first line of code.",
    "hab.academic.is.h3": "Information Systems",
    "hab.academic.is.p": "Conceptual data modeling, business processes and integration between heterogeneous systems. It lets me understand the domain and the real needs of whoever will use the system, not just its technical side.",
    "hab.academic.bd.h3": "Big Data (Master's specialization)",
    "hab.academic.bd.p": "Distributed processing with Spark, data pipeline design, cluster computing and reasoning about scalability and volume when data neither fits nor is processed on a single machine.",
    "hab.academic.ml.h3": "Modeling and machine learning",
    "hab.academic.ml.p": "Building, training and evaluating predictive models in Python and designing recommendation algorithms. Applied in the burnout Predictor and in Auscultify.",
    "hab.academic.research.h3": "Scientific method and research",
    "hab.academic.research.p": "I work in a research group at the UAL: hypothesis formulation, controlled experimentation, measurement of results and iteration based on the data obtained.",
    "hab.academic.comm.h3": "Technical communication and defense",
    "hab.academic.comm.p": "Writing technical reports and oral defense before a committee. My Bachelor's thesis (Auscultify) received a grade of 9.4/10.",
    "hab.academic.algo.h3": "Algorithmic thinking and complexity analysis",
    "hab.academic.algo.p": "Breaking problems down, choosing data structures and evaluating the cost of a solution before implementing it.",
    "hab.academic.note": "<strong>For anyone assessing the profile:</strong> these competencies are why I can join a new project or domain, understand it quickly and justify every technical decision, rather than just implementing a closed specification.",
    "hab.soft.title": "Transferable skills",
    "hab.soft.desc": "The ones that appear in my résumé as \"Skills\". I include them with concrete evidence behind each one, because stated on their own they say little about anyone.",
    "hab.soft.team.h3": "Teamwork",
    "hab.soft.team.p": "The internship and the thesis were carried out as a team, with an explicit backend/frontend split and daily coordination through Git and code reviews.",
    "hab.soft.analytical.h3": "Analytical thinking",
    "hab.soft.analytical.p": "I break a problem into measurable parts before solving it; it's the basis of my work with data and predictive models.",
    "hab.soft.time.h3": "Time management",
    "hab.soft.time.p": "I combined the Master's, which is online, with my role at the Applied Computing Group, and I fit it around personal projects such as Tokimori, prioritizing tasks and setting realistic deadlines. It is compatible with a full-time job.",
    "hab.soft.learning.h3": "Continuous learning",
    "hab.soft.learning.p": "I have picked up n8n, PostGIS, Spark and Next.js as each project required, learning them independently and taking them all the way to production.",
    "hab.lang.title": "Languages",
    "hab.lang.desc": "Communication level in technical and professional settings.",
    "hab.lang.es.name": "Spanish",
    "hab.lang.es.level": "Native",
    "hab.lang.es.p": "Mother tongue.",
    "hab.lang.en.name": "English",
    "hab.lang.en.level": "B2 · Cambridge First (FCE)",
    "hab.lang.en.p": "Fluent reading of documentation and technical specifications, and written and spoken communication in professional settings.",
    "hab.lang.note": '<strong>Note:</strong> every technology on this page is backed by a project in the <a href="proyectos.html">Projects</a> section or by my <a href="experiencia.html">Work experience</a>. If something isn\'t listed here it\'s almost always because I haven\'t yet used it in a real setting.',

    "for.title": "Education · José Carlos Ruiz Sánchez",
    "for.eyebrow": "Education",
    "for.h1": "Education",
    "for.lead": "This page details my formal education following the same structure as my résumé: the degrees I studied at the University of Almería, my Bachelor's thesis and its grade, and language certifications. It also includes an explanation of the date overlap between the Bachelor's and the Master's, so that the dates on my CV are unambiguous.",
    "for.toc.degrees": "Degrees",
    "for.toc.tfg": "Bachelor's thesis",
    "for.toc.overlap": "Bachelor and Master overlap",
    "for.toc.certs": "Certifications",
    "for.degrees.title": "Degrees",
    "for.degrees.desc": "All my university education was completed at the University of Almería. The Master's started before the Bachelor's was formally closed.",
    "for.master.period": "Since 2025 · in progress",
    "for.master.h3": "Master's Degree in Computer Engineering",
    "for.master.place": "University of Almería",
    "for.master.p": "Big Data specialization (large-scale infrastructure and databases, analysis of large data volumes and distributed processing), one of the master's three tracks alongside Internet of Things and web/mobile development. It is 100% online and compatible with a full-time job.",
    "for.master.tag1": "Big Data specialization",
    "for.master.tag2": "In progress",
    "for.grado.period": "2021-2026",
    "for.grado.h3": "Bachelor's Degree in Computer Engineering",
    "for.grado.place": "University of Almería",
    "for.grado.p": "Double specialization in Software Engineering and Information Systems. Training in software analysis and design, architectures, databases, information-systems modeling and working on team projects.",
    "for.grado.tag1": "Software Engineering specialization",
    "for.grado.tag2": "Information Systems specialization",
    "for.tfg.title": "Bachelor's thesis",
    "for.tfg.desc": "The Bachelor's Degree ends with a final thesis developed as a team and defended before a committee.",
    "for.tfg.h3": "Auscultify",
    "for.tfg.grade": "Grade: 9.4 / 10",
    "for.tfg.p": "A project developed as a team, with an explicit backend/frontend split and coordination through Git. It involved data modeling, microservices and a recommendation algorithm, plus writing the technical report and the oral defense.",
    "for.tfg.p2": "I defended it in the February 2026 session. That's why the Bachelor's is listed as completed in 2026, even though the rest of the courses were passed earlier.",
    "for.overlap.title": "Overlap between the Bachelor's and the Master's",
    "for.overlap.desc": "A note about the dates on my CV: there are a few months of overlap between the end of the Bachelor's and the start of the Master's. This is why.",
    "for.overlap.i1.h3": "Enrolling in the Master's with the thesis pending",
    "for.overlap.i1.p": "I started the Master's Degree in Computer Engineering with only the credits of the Bachelor's thesis left. I enrolled with the rest of my Bachelor's record already passed, so as not to lose a full academic year.",
    "for.overlap.i2.h3": "Defending the thesis in February",
    "for.overlap.i2.p": "I defended the Bachelor's thesis in the February 2026 session. Until then the Bachelor's was recorded as unfinished despite the rest of my record being passed.",
    "for.overlap.i3.h3": "How it shows on the CV",
    "for.overlap.i3.p": "Hence the CV shows the Bachelor's ending in 2026 and the Master's starting a few months earlier: they are not two independent periods, but that transition.",
    "for.overlap.note": "<strong>For anyone assessing the profile:</strong> the date overlap between the Bachelor's and the Master's is not a CV error. It is due to completing the final stretch of the Bachelor's (the thesis defense, in February 2026) while already enrolled in the Master's.",
    "for.certs.title": "Certifications and languages",
    "for.certs.desc": "Official language certifications. The detail of my communication level in technical settings is on the Skills page.",
    "for.cert.fce.h3": "Cambridge English: First (FCE)",
    "for.cert.fce.grade": "Level B2 (CEFR)",
    "for.cert.fce.p": "English certificate at CEFR level B2. I use it for reading documentation and technical specifications and for written and spoken communication in professional settings.",
    "for.note": '<strong>Note:</strong> the technical detail of what I learned in each degree is on <a href="habilidades.html">Skills</a>, and its application in real projects is on <a href="experiencia.html">Work experience</a> and <a href="proyectos.html">Projects</a>.',

    "exp.title": "Work experience · José Carlos Ruiz Sánchez",
    "exp.eyebrow": "Work experience",
    "exp.h1": "Work experience",
    "exp.lead": "This page gathers my work experience as a timeline, following the same structure as my résumé. For now it includes a single role: full-stack developer at the University of Almería's Applied Computing Group (ACG). The technical detail of each role is expanded on its own page.",
    "exp.timeline.title": "Timeline",
    "exp.timeline.desc": "My roles ordered in time. Use the search box to filter by company, role or technology, and the dropdown to change the order.",
    "exp.search.label": "Search",
    "exp.search.placeholder": "Company, role or technology",
    "exp.sort.label": "Sort",
    "exp.sort.newest": "Newest first",
    "exp.sort.oldest": "Oldest first",
    "exp.empty": "No experience matches your search.",
    "exp.item.period": "February 2026 – August 2026",
    "exp.item.h3": "Full-stack developer",
    "exp.item.place": "Applied Computing Group (ACG) · University of Almería",
    "exp.item.p": "Team build, backend and frontend, of an interactive map showing user activity across the University of Almería campus, with data refreshed every 2 minutes through automated ingestion.",
    "exp.item.b1": "Development of a backend API in Node.js with Express.js.",
    "exp.item.b2": "Frontend in Next.js: interactive map visualizing user activity over the campus plan.",
    "exp.item.b3": "Campus geospatial telemetry pipeline: ingestion of ~3,000 rows every 2 minutes automated with n8n, with storage and spatial querying in PostGIS.",
    "exp.item.b4": "Deployment on Docker.",
    "exp.item.cta": "View role detail",

    "con.title": "Contact · José Carlos Ruiz Sánchez",
    "con.eyebrow": "Contact",
    "con.h1": "Contact",
    "con.lead": "This page brings together in one place everything you need to get in touch with me and to assess whether I fit your process: the channels you can reach me through, my real availability to start, and the answers to the questions that usually come up in a first contact. It follows the same structure as my résumé and all the details match the footer of this site.",
    "con.action.call": "Call me",
    "con.action.email": "Send an email",
    "con.action.cv": "Download résumé (PDF)",
    "con.toc.channels": "Contact channels",
    "con.toc.availability": "Availability",
    "con.toc.faq": "FAQ",
    "con.channels.title": "Contact channels",
    "con.channels.desc": "The same details that appear in the footer of this site and in my résumé. For a first contact I prefer a call.",
    "con.channel.phone": "Phone",
    "con.channel.email": "Email",
    "con.channel.linkedin": "LinkedIn",
    "con.channel.github": "GitHub",
    "con.avail.title": "Availability",
    "con.avail.desc": "As stated in my résumé, broken down here so it's unambiguous what I can offer from day one.",
    "con.avail.start.h3": "Immediate start",
    "con.avail.start.p": "I can start with no notice period. I'm currently studying the Master's Degree in Computer Engineering, compatible with a full-time job.",
    "con.avail.mode.h3": "Flexible arrangement",
    "con.avail.mode.p": "On-site, hybrid or remote, depending on what the team needs. I've already worked remotely with daily coordination through Git and code reviews during my internship.",
    "con.avail.mobility.h3": "Geographic mobility",
    "con.avail.mobility.p": "Based in Málaga and able to relocate anywhere in Spain for an on-site or hybrid role.",
    "con.avail.hours.h3": "Working hours and language",
    "con.avail.hours.p": "Available full-time. Working language Spanish; English B2 (Cambridge First) for documentation and communication in technical settings.",
    "con.faq.title": "FAQ",
    "con.faq.desc": "The questions that usually come up in a first conversation, answered in advance to save the back-and-forth email.",
    "con.faq.q1.h3": "What's the best way to reach you?",
    "con.faq.q1.p": 'A call to <a href="tel:+34608257574">+34 608 25 75 74</a>. If you prefer it in writing, email me at <a href="mailto:josecarlosruizsan@gmail.com">josecarlosruizsan@gmail.com</a>.',
    "con.faq.q2.h3": "Are you available now? How do you fit in the Master's?",
    "con.faq.q2.p": "Yes: immediate start and full-time. The Master's Degree in Computer Engineering I'm studying is 100% online and requires no in-person attendance, so it can be organized around working hours and doesn't clash with an on-site, hybrid or remote role.",
    "con.faq.q3.h3": "Do you work remotely?",
    "con.faq.q3.p": "Yes, and also on-site or hybrid. I've already worked remotely with a distributed team, coordinating through Git and code reviews.",
    "con.faq.q4.h3": "Can I see your code?",
    "con.faq.q4.p": 'Some of it is published at <a href="https://github.com/jrs407">github.com/jrs407</a>, along with the code for this portfolio. Some projects have a private repository: I can grant read access, but I need you to ask me first (by call or email) to give permission. In <a href="proyectos.html">Projects</a> you have the context for each one.',
    "con.faq.q5.h3": "Do you have a résumé in PDF?",
    "con.faq.q5.p": 'Yes: <a href="assets/cv/CV - Jose Carlos Ruiz Sanchez.pdf" download>download it here</a>. This site expands each section of that document with real context.',
    "con.note": '<strong>For anyone assessing the profile:</strong> the availability details on this page are current as of August 2026. If something has changed by the time you read it, or if you need a reference, email me and I\'ll reply the same working day. All the information is consistent with my <a href="assets/cv/CV - Jose Carlos Ruiz Sanchez.pdf" download>résumé in PDF</a>.'
  }
};

function translatePage(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  const targets = document.querySelectorAll("[data-i18n]");
  // Pages that don't opt in (no [data-i18n] nodes) keep their own lang/title.
  if (!targets.length) return;

  document.documentElement.lang = lang;
  const titleKey = document.documentElement.dataset.i18nTitle;
  if (titleKey && dict[titleKey] != null) document.title = dict[titleKey];

  targets.forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value != null) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = dict[el.dataset.i18nHtml];
    if (value != null) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-label]").forEach((el) => {
    const value = dict[el.dataset.i18nLabel];
    if (value != null) el.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = dict[el.dataset.i18nAlt];
    if (value != null) el.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = dict[el.dataset.i18nPlaceholder];
    if (value != null) el.setAttribute("placeholder", value);
  });
}

function applyLanguage(lang) {
  languageToggle.dataset.lang = lang;
  languageToggle.textContent = FLAGS[lang];
  languageToggle.setAttribute("aria-label", LANG_LABELS[lang]);
  translatePage(lang);
}

const storedLang = localStorage.getItem("lang");
applyLanguage(storedLang === "en" ? "en" : "es");

languageToggle.addEventListener("click", () => {
  const next = languageToggle.dataset.lang === "es" ? "en" : "es";
  applyLanguage(next);
  localStorage.setItem("lang", next);
});

const revealEls = document.querySelectorAll(".reveal-left");

if (revealEls.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          entry.target.classList.remove("is-exit");
        } else {
          entry.target.classList.remove("is-visible");
          entry.target.classList.toggle(
            "is-exit",
            entry.boundingClientRect.top < 0
          );
        }
      });
    },
    { threshold: 0.2 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
}

function initCarousel(carousel) {
  const track = carousel.querySelector(".carousel-track");
  const viewport = carousel.querySelector(".carousel-viewport");
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const prevBtn = carousel.querySelector(".carousel-arrow--prev");
  const nextBtn = carousel.querySelector(".carousel-arrow--next");

  let index = 0;
  let offset = 0;

  const mobileQuery = window.matchMedia("(max-width: 720px)");
  const perViewDesktop = Number(carousel.dataset.perView) || 3;
  const perViewMobile = Number(carousel.dataset.perViewMobile) || 1;
  const perView = () =>
    Math.min(slides.length, mobileQuery.matches ? perViewMobile : perViewDesktop);

  const maxIndex = () => Math.max(0, slides.length - perView());

  function targetFor(i) {
    const pv = perView();
    const first = slides[i];
    const last = slides[Math.min(i + pv - 1, slides.length - 1)];
    const groupWidth = last.offsetLeft + last.offsetWidth - first.offsetLeft;
    const sideSpace = (viewport.clientWidth - groupWidth) / 2;
    return -(first.offsetLeft - slides[0].offsetLeft - sideSpace);
  }

  function markActive() {
    const pv = perView();
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i >= index && i < index + pv);
    });
  }

  function settle(animate = true) {
    index = Math.max(0, Math.min(index, maxIndex()));
    offset = targetFor(index);
    track.classList.toggle("no-transition", !animate);
    track.style.transform = `translateX(${offset}px)`;
    markActive();
    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= maxIndex();
  }

  function nearestIndex(px) {
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i <= maxIndex(); i++) {
      const d = Math.abs(targetFor(i) - px);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    }
    return best;
  }

  prevBtn.addEventListener("click", () => {
    index -= 1;
    settle();
  });

  nextBtn.addEventListener("click", () => {
    index += 1;
    settle();
  });

  let pointerActive = false;
  let dragging = false;
  let startX = 0;
  let startOffset = 0;
  let moved = false;

  viewport.addEventListener("pointerdown", (e) => {
    if (e.button != null && e.button !== 0) return;
    pointerActive = true;
    dragging = false;
    moved = false;
    startX = e.clientX;
    startOffset = offset;
  });

  window.addEventListener("pointermove", (e) => {
    if (!pointerActive) return;
    const dx = e.clientX - startX;

    if (!dragging) {
      if (Math.abs(dx) <= 4) return;
      dragging = true;
      moved = true;
      viewport.classList.add("is-dragging");
      track.classList.add("no-transition");
    }

    const hi = targetFor(0);
    const lo = targetFor(maxIndex());
    let next = startOffset + dx;
    if (next > hi) next = hi + (next - hi) * 0.3;
    if (next < lo) next = lo + (next - lo) * 0.3;
    offset = next;
    track.style.transform = `translateX(${offset}px)`;
  });

  window.addEventListener("pointerup", () => {
    if (!pointerActive) return;
    pointerActive = false;
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove("is-dragging");
    index = nearestIndex(offset);
    settle();
  });

  viewport.addEventListener(
    "click",
    (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    },
    true
  );
  slides.forEach((s) =>
    s.addEventListener("dragstart", (e) => e.preventDefault())
  );

  let resizeRaf;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(() => settle(false));
  });
  window.addEventListener("load", () => settle(false));

  settle(false);
}

document.querySelectorAll(".carousel").forEach(initCarousel);
