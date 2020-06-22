#!/bin/bash

./clean.sh

JENV="development"
OPEN=true
LIVE=false
while getopts "hpli" opt; do
    case "${opt}" in
        h) OPEN=false 
        ;;
        p) JENV="production" 
        ;;
        l) LIVE=true 
        ;;
        i) bundle install
        ;;
    esac
done
echo Running in $JENV mode.
$OPEN && echo "Opening site in browser" && ./opensite.sh &
if [ $LIVE = true ]; then
    JEKYLL_ENV=${JENV} bundle exec jekyll serve --incremental --livereload
else
    JEKYLL_ENV=${JENV} bundle exec jekyll serve
fi