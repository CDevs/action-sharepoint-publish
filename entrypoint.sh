#!/bin/sh -l

echo "Moving to SharePoint";
cd $GITHUB_WORKSPACE
node /app/index.js
[ $? -eq 0 ]  || exit 1

