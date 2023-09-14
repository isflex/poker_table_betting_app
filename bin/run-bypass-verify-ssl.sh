#!/bin/bash

cd $PROJECT_CWD/bin;

if [[ ${NAME} == 'DESKTOP-T9M49JD' ]]
then
  echo 0
elif [[ ! -z ${CI} ]]
then
  echo 0
else
  echo 1
fi
