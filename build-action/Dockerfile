FROM node:12.14.1-alpine

RUN apk add --no-cache --virtual .build-deps make gcc g++ musl-dev\
 ruby-dev ruby-full build-base git
RUN gem install --no-document jekyll bundler
RUN apk del .build-deps

ADD build.sh /build.sh
RUN chmod +x /build.sh
ENTRYPOINT ["/build.sh"]
