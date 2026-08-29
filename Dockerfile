FROM node:20-alpine

# Servidor estatico con recarga automatica del navegador al guardar cambios
RUN npm install -g browser-sync

WORKDIR /app

EXPOSE 3000

# --server        sirve los archivos de /app (montados como volumen)
# --files "**/*"  observa todo el proyecto y recarga el navegador al guardar
# --no-notify     sin overlay de notificacion en la pagina
CMD ["browser-sync", "start", \
     "--server", ".", \
     "--files", "**/*", \
     "--host", "0.0.0.0", \
     "--port", "3000", \
     "--no-notify", \
     "--no-open"]
