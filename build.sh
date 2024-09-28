#!/bin/sh

RAYON_NUM_THREADS=1

git checkout .
git pull

nvm use

npm install

npm run build
