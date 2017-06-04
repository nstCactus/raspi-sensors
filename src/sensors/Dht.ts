/**
 * @author nstCactus
 * @date 24/10/16 22:10
 */

///<reference path="../../typings/index.d.ts"/>

import {AbstractSensor} from "../AbstractSensor";
import {SensorValue, Type} from "../SensorValue";
const dht: Dht = require("node-dht-sensor");

export  class DhtSensor extends AbstractSensor {
    public static readonly sensorType: number = 22;

    protected gpioPin: number;

    constructor(name: string, gpioPin: number) {
        super(name, `Dht${DhtSensor.sensorType}_gpio${gpioPin}`);

        this.gpioPin = gpioPin;
    }

    read(): Array<SensorValue> {
        try {
            const reading = dht.read(DhtSensor.sensorType, this.gpioPin);

            return [
                new SensorValue(Type.temperature, reading.temperature),
                new SensorValue(Type.humidity, reading.humidity),
            ];
        } catch (e) {
            console.warn(`Skipping dht sensor ${this.getName()} as an error occurred while reading from it`);
        }
    }
}
