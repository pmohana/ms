# Use the official image as a parent image
FROM node:12-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

#EXPOSE 9222

CMD ["npm", "start"]
