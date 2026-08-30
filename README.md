# jrs407.github.io-portfolio

Portfolio personal construido con HTML, CSS y JavaScript puro (sin frameworks ni build step), listo para GitHub Pages.

## Estructura

```
index.html          Sobre mí (portada)
proyectos.html      Proyectos
experiencia.html    Experiencia laboral
habilidades.html    Habilidades
contacto.html       Contacto
assets/
  css/
    style.css         Estilos globales (incluye el header)
    proyectos.css     Estilos propios de proyectos.html
    experiencia.css   Estilos propios de experiencia.html
    habilidades.css   Estilos propios de habilidades.html
    contacto.css      Estilos propios de contacto.html
  js/
    script.js         Lógica global (header: menú, tema, idioma)
    proyectos.js      Lógica propia de proyectos.html
    experiencia.js    Lógica propia de experiencia.html
    habilidades.js    Lógica propia de habilidades.html
    contacto.js       Lógica propia de contacto.html
  img/
```

Cada página carga `assets/css/style.css` + su CSS propio, y `assets/js/script.js` + su JS propio.
El header es común a todas las páginas y sus enlaces redirigen a los HTML correspondientes.


