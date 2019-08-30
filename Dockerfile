FROM node:dubnium-alpine

RUN apk add -U --no-cache tini

ENV NPM_CONFIG_LOGLEVEL=warn

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --production

COPY . ./

ENTRYPOINT [ "/sbin/tini", "--" ]
CMD [ "node", "index.js" ]
