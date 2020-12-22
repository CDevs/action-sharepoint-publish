#!/bin/sh -l

echo "Moving to SharePoint";
#mkdir /out
#cd $GITHUB_WORKSPACE
#zip -r /out/repoarchive.zip ./build
#export FILE_PATH='/out/repoarchive.zip'

node /app/index.js
[ $? -eq 0 ]  || exit 1

