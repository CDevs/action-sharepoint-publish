#!/bin/sh -l

echo "Moving to SharePoint";


node /app/index.js
[ $? -eq 0 ]  || exit 1

