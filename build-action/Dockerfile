FROM alpine

RUN apk update && apk upgrade
RUN apk add --update nodejs
RUN apk add --no-cache make gcc g++ musl-dev\
 ruby-dev ruby-full build-base zlib-dev
RUN gem install --no-document jekyll bundler

ADD build.sh /build.sh
RUN chmod +x /build.sh
ENTRYPOINT ["/build.sh"]
