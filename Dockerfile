#specify a base image
FROM node:alpine
#Set working directory to usr/app
WORKDIR /usr/app
# Copy package.json first to avoid unneccery npm install
COPY ./package.json ./
#install some dependencies
RUN npm install
#Copy all context in build folder into container
COPY ./ ./

# Default command
CMD [ "npm","start" ]
