# Базовый образ с Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /luckydiamond

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код проекта
COPY . .

# Выполняем сборку (если нужна)
RUN npm run build

# Запускаем приложение
CMD ["npm", "run", "start"]

# Открываем порт 3000
EXPOSE 3000
