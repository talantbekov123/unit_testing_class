FROM node:slim

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
Run cd /usr/src/app/
Run npm install
Run node --version

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "nvm", "install", "6.11.1" ]
CMD [ "nvm", "use", "6.11.1" ]
CMD [ "node", "server.js" ]