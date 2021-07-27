# pull official base image
FROM node:15.3.0-alpine3.10

RUN apk add g++ make python

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

# start app
CMD ["npm", "start"]
