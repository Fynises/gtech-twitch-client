FROM node:lts-buster

COPY . .

RUN npm i
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
