FROM node:12-alpine
ENV PORT=5000

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

COPY . .

CMD ["node", "src/index.js"]