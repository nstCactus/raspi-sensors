/**
 * @author nstCactus
 * @date 24/10/16 12:57
 */
"use strict";
///<reference path="../../typings/index.d.ts"/>
const AbstractSensor_1 = require("../AbstractSensor");
const SensorValue_1 = require("../SensorValue");
var ds18b20 = require("ds18b20");
var Sensors;
(function (Sensors) {
    class Ds18b20 extends AbstractSensor_1.AbstractSensor {
        read(decimals = 2) {
            var value = ds18b20.readC(this.uid, decimals);
            return [new SensorValue_1.SensorValue(SensorValue_1.Type.temperature, value)];
        }
        static list() {
            return ds18b20.list();
        }
    }
    Sensors.Ds18b20 = Ds18b20;
})(Sensors || (Sensors = {}));
