FROM node:12-alpine
ENV PORT=4000

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

COPY . .
EXPOSE 4000
CMD ["node", "src/index.js"]