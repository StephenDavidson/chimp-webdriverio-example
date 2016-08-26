#!/usr/bin/env bash

if [[ "$TRAVIS_OS_NAME" == "linux" ]]; then
  sh -e /etc/init.d/xvfb start
  sleep 3
fi

if [[ "$TRAVIS_OS_NAME" == "osx" ]]; then
  if [[ "$BROWSER" == "chrome" ]]; then
    brew update
    brew cask
    brew cask install google-chrome
  fi
fi