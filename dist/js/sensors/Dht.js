"use strict";
/**
 * @author nstCactus
 * @date 24/10/16 22:10
 */
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../typings/index.d.ts"/>
const AbstractSensor_1 = require("../AbstractSensor");
const SensorValue_1 = require("../SensorValue");
const dht = require("node-dht-sensor");
class DhtSensor extends AbstractSensor_1.AbstractSensor {
    constructor(name, gpioPin) {
        super(name, `Dht${DhtSensor.sensorType}_gpio${gpioPin}`);
        this.gpioPin = gpioPin;
    }
    read() {
        try {
            const reading = dht.read(DhtSensor.sensorType, this.gpioPin);
            return [
                new SensorValue_1.SensorValue(SensorValue_1.Type.temperature, reading.temperature),
                new SensorValue_1.SensorValue(SensorValue_1.Type.humidity, reading.humidity),
            ];
        }
        catch (e) {
            console.warn(`Skipping dht sensor ${this.getName()} as an error occurred while reading from it`);
        }
    }
}
DhtSensor.sensorType = 22;
exports.DhtSensor = DhtSensor;
