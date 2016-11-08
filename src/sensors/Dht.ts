/**
 * @author nstCactus
 * @date 24/10/16 22:10
 */

///<reference path="../../typings/index.d.ts"/>

import {AbstractSensor} from "../AbstractSensor";
import {SensorValue, Type} from "../SensorValue";
var dht:Dht = require("node-dht-sensor");

namespace Sensors {
    export default class Dht extends AbstractSensor {
        public static readonly sensorType: number = 22;

        protected gpioPin: number;

        constructor(name: string, gpioPin: number) {
            super(name, `Dht${Dht.sensorType}_gpio${gpioPin}`);

            this.gpioPin = gpioPin;
        }

        read(): Array<SensorValue> {
            var reading = dht.read(Dht.sensorType, this.gpioPin);

            return [
                new SensorValue(Type.temperature, reading.temperature),
                new SensorValue(Type.humidity, reading.humidity),
            ];
        }
    }
}
