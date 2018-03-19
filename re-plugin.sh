#!/bin/bash

rm -rf www

ionic cordova platform rm ios
ionic cordova platform rm android

ionic cordova plugin rm cordova-plugin-inappbrowser
ionic cordova plugin rm cordova-plugin-splashscreen
ionic cordova plugin rm cordova-plugin-statusbar
ionic cordova plugin rm cordova-plugin-whitelist

ionic cordova plugin add cordova-plugin-inappbrowser
ionic cordova plugin add cordova-plugin-splashscreen
ionic cordova plugin add cordova-plugin-statusbar
ionic cordova plugin add cordova-plugin-whitelist

ionic cordova platform add ios
ionic cordova platform add android

ionic cordova prepare
