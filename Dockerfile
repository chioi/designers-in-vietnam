FROM mhart/alpine-node:10

RUN mkdir -p /srv/app/client
WORKDIR /srv/app/client
EXPOSE 4000

COPY package.json /srv/app/client
COPY yarn.lock /srv/app/client

RUN yarn install

COPY . /srv/app/client

CMD [ "yarn", "start" ]
