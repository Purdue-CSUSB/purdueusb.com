FROM node:12.14.1-alpine

RUN apk add --no-cache --virtual .build-deps make gcc g++ musl-dev \
 && gem install --no-document jekyll bundler \
 && apk del .build-deps

RUN npm i -g --unsafe-perm now

ADD build.sh /build.sh
RUN chmod +x /build.sh
ENTRYPOINT ["/build.sh"]