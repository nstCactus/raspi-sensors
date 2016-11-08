/**
 * @author nstCactus
 * @date 24/10/16 22:10
 */
"use strict";
///<reference path="../../typings/index.d.ts"/>
const AbstractSensor_1 = require("../AbstractSensor");
const SensorValue_1 = require("../SensorValue");
var dht = require("node-dht-sensor");
class DhtSensor extends AbstractSensor_1.AbstractSensor {
    constructor(name, gpioPin) {
        super(name, `Dht${DhtSensor.sensorType}_gpio${gpioPin}`);
        this.gpioPin = gpioPin;
    }
    read() {
        var reading = dht.read(DhtSensor.sensorType, this.gpioPin);
        return [
            new SensorValue_1.SensorValue(SensorValue_1.Type.temperature, reading.temperature),
            new SensorValue_1.SensorValue(SensorValue_1.Type.humidity, reading.humidity),
        ];
    }
}
DhtSensor.sensorType = 22;
exports.DhtSensor = DhtSensor;
