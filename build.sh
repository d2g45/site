#!/bin/sh

git checkout .
git pull

nvm use

yarn install --frozen-lockfile

yarn build
