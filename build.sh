#! /bin/sh

[ $1 = "-s" ] && curl -X POST -d {} https://api.netlify.com/build_hooks/5ef07283d0f265b1d1a8e875 && echo Triggered staging build
[ $1 = "-p" ] && curl -X POST -d {} https://api.netlify.com/build_hooks/5ef072907588de198f84b631 && echo Triggered production build

