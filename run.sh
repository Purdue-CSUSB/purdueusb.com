#!/bin/bash

./clean.sh

JENV="development"
OPEN=true
LIVE=false
TRACE=false
while getopts "hplit" opt; do
    case "${opt}" in
        h) OPEN=false 
        ;;
        p) JENV="production" 
        ;;
        l) LIVE=true 
        ;;
        i) bundle install
        ;;
        t) TRACE=true
        ;;
    esac
done

echo Running in $JENV mode.
$OPEN && echo "Opening site in browser" && ./opensite.sh &
OPTS=""

if [ $LIVE = true ]; then
    OPTS="${OPTS} --incremental --livereload"  
fi

if [ $TRACE = true ]; then
    OPTS="${OPTS} --trace"  
fi

eval JEKYLL_ENV=${JENV} bundle exec jekyll serve ${OPTS}