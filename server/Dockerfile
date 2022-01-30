FROM node:16

WORKDIR /server

COPY package*.json ./ 

RUN npm install

RUN npm install typescript

RUN npm install -g tsc

COPY . .

ENV PORT=8000

EXPOSE 8000

CMD ["npm", "start"]