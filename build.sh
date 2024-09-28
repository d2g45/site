#!/bin/sh

git checkout .
git pull

nvm use

npm install

npm run build
