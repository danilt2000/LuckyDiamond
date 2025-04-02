# Базовый образ с Node.js
FROM node:18-alpine

WORKDIR /luckydiamond/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3000