#! /bin/sh

[ $1 = "-s" ] && curl -X POST -d {} https://api.netlify.com/build_hooks/5efc6382c85bbb7f4ad0d703 && echo Triggered staging build
[ $1 = "-p" ] && curl -X POST -d {} https://api.netlify.com/build_hooks/5efc60efffc7df67c4ab028a && echo Triggered production build

