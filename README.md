# jrs407.github.io-portfolio

Portfolio personal construido con HTML, CSS y JavaScript puro (sin frameworks ni build step), listo para GitHub Pages.

## Estructura

```
index.html
assets/
  css/style.css
  js/script.js
  img/
```

## Desarrollo local

Abre `index.html` directamente en el navegador, o sirve la carpeta con cualquier servidor estático, por ejemplo:

```
npx serve .
```

## Publicar en GitHub Pages

1. Ve a **Settings → Pages** en el repositorio.
2. En "Build and deployment", selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)`.
4. Guarda; el sitio quedará publicado en `https://jrs407.github.io/jrs407.github.io-portfolio/`.

## Personalización pendiente

- Reemplaza los textos de ejemplo (nombre, bio, proyectos, enlaces sociales) en [index.html](index.html).
- Añade capturas o imágenes reales en `assets/img/` y sustituye los `project-thumb` por `<img>`.
- Actualiza los enlaces de GitHub/LinkedIn en la sección hero.