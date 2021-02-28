FROM node:12-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .

RUN npm run build

COPY ormconfig.json ./dist/
COPY .env ./dist/
WORKDIR ./dist/

EXPOSE 4000
CMD ["node", "src/index.js"]