FROM node:21

WORKDIR /frontend

COPY . /frontend/
RUN yarn install

RUN yarn playwright install --with-deps

EXPOSE 3000
CMD [ "yarn", "dev" ]
