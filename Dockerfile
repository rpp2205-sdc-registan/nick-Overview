FROM node:latest

WORKDIR /sdc

COPY . .

RUN npm install

CMD ["node", "./index.js"]