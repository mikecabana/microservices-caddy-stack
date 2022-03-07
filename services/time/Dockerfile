FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY index.js ./

ARG PORT=80

EXPOSE ${MY_SERVICE_PORT}

CMD [ "node", "index.js" ]