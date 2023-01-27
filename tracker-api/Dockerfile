FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV DB_URL=mongodb://abcde:fghijk@mongodb
ENV ENABLE_CORS=true
ENV JWT_SECRET=sjnfiurgbiabgjslfjsljfgblsngjdg
ENV NODE_ENV=production

CMD ["npm", "start"]
