# Etapa 1: Construcción
FROM node:14 AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos construidos de la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80 para el servidor web
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
