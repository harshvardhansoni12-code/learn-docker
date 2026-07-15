FROM node:22

WORKDIR /nodejs-project

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]