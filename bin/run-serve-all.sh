#!/bin/bash

cd $FLEX_APP/bin;

source ~/.profile;
yarn kill:all:ports;
yarn start;