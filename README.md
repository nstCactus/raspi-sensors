Raspi-sensors
=============

An abstraction layer for a selection of raspberry-compatible sensors.

Currently, only the following sensors are supported:
  * [ds18b20][] – a temperature sensor
  * DHTxx sensors – combined temperature and humidity sensors

[ds18b20]: http://datasheets.maximintegrated.com/en/ds/DS18B20.pdf


## Build

This package is written in typescript. If you want to hack around, all you have to do to transpile to JS is:

```
# Once, after cloning project
npm install

# Every time you make a change
gulp scripts
```


## Usage

WIP
