FROM node:21

WORKDIR /frontend


COPY package*.json ./
RUN yarn install

RUN yarn playwright install --with-deps

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]
