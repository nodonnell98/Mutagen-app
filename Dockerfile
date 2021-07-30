# pull official base image
FROM node:16-alpine3.11

RUN apk add g++ make python

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

# start app
CMD ["npm", "start"]
