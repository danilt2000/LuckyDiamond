# Используем официальный образ Node.js для сборки Vue-приложения
FROM node:18 AS build-stage

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json перед установкой зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код в контейнер
COPY . .

# Собираем приложение
RUN npm run build

# Используем Nginx для сервинга статических файлов
FROM nginx:1.23 AS production-stage

# Копируем собранные файлы из предыдущего контейнера
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Копируем кастомный Nginx-конфиг (если есть)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]