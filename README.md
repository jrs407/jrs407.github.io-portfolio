# jrs407.github.io-portfolio

> ⚠️ **En desarrollo.** Esta página web está en construcción activa y su contenido
> puede cambiar en cualquier momento. La sección **Proyectos** todavía muestra un
> texto provisional de "Sección en construcción"; el resto de páginas ya tiene
> contenido y sigue puliéndose.

Portfolio personal construido con HTML, CSS y JavaScript puro (sin frameworks ni build step), listo para GitHub Pages.

## Estado

| Página | Estado |
| --- | --- |
| `index.html` (Sobre mí) | En pulido |
| `habilidades.html` | En pulido |
| `contacto.html` | En pulido |
| `formacion.html` (Formación Académica) | Con contenido — en pulido |
| `experiencia.html` (Experiencia laboral) | Con contenido — en pulido |
| `ual-trace.html` (detalle del puesto en el ACG) | Con contenido — en pulido |
| `proyectos.html` | Pendiente — placeholder "en construcción" |

## Estructura

```
index.html          Sobre mí (portada)
proyectos.html      Proyectos
experiencia.html    Experiencia laboral
ual-trace.html      Detalle del puesto de desarrollador full-stack en el ACG (UAL)
habilidades.html    Habilidades
formacion.html      Formación Académica
contacto.html       Contacto
assets/
  css/
    style.css         Estilos globales (incluye el header)
    proyectos.css     Estilos propios de proyectos.html
    experiencia.css   Estilos de experiencia.html y ual-trace.html
    habilidades.css   Estilos propios de habilidades.html
    formacion.css     Estilos propios de formacion.html
    contacto.css      Estilos propios de contacto.html
  js/
    script.js         Lógica global (header: menú, tema, idioma) y diccionario i18n
    proyectos.js      Lógica propia de proyectos.html
    experiencia.js    Lógica de experiencia.html y ual-trace.html
    habilidades.js    Lógica propia de habilidades.html
    formacion.js      Lógica propia de formacion.html
    contacto.js       Lógica propia de contacto.html
  cv/                 PDF del currículum (enlazado desde el botón de la portada)
  img/
    Foto.jpg
    placeholder.svg
    Experiencia/       Imágenes de la pestaña de experiencia (ual-trace.png)
    Habilidades/       Iconos de tecnologías (Portada/)
```

Cada página carga `assets/css/style.css` + su CSS propio, y `assets/js/script.js` + su JS propio.
`ual-trace.html` es la página de detalle del puesto enlazada desde `experiencia.html` y desde el
carrusel de la portada; reutiliza el CSS y el JS de `experiencia`.

El header es común a todas las páginas y sus enlaces redirigen a los HTML correspondientes.

## Internacionalización (ES/EN)

El sitio es bilingüe. Los textos traducibles se marcan en el HTML con atributos
`data-i18n`, `data-i18n-title`, `data-i18n-alt`, etc., y `assets/js/script.js`
contiene el diccionario y aplica el idioma seleccionado desde el header (la
preferencia se recuerda entre visitas).

## Desarrollo local

Servidor estático con recarga automática del navegador vía Docker:

```
docker compose up
```

Sirve el proyecto en `http://localhost:3000` con `browser-sync`, recargando al
guardar cualquier archivo. En Windows la recarga usa sondeo de ficheros
(`CHOKIDAR_USEPOLLING`) porque los bind mounts no emiten eventos al contenedor.

Alternativamente, cualquier servidor estático sobre la raíz del repo funciona
(no hay paso de build).
