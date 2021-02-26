FROM node:12-alpine
WORKDIR /app
COPY . .
RUN npm install

EXPOSE 5000
ENV PORT=500
CMD ["npm", "run", "dev"]