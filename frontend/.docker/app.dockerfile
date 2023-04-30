FROM node:14-alpine

WORKDIR /home/node/app
COPY package.json ./
RUN  npm install -g @angular/cli && npm install

COPY . .

EXPOSE 4200
   
CMD ["ng", "s"]  