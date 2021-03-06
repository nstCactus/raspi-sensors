"use strict";
/**
 * @author nstCactus
 * @date 20/10/16 23:12
 */
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../typings/index.d.ts"/>
var Type;
(function (Type) {
    Type[Type["temperature"] = 0] = "temperature";
    Type[Type["humidity"] = 1] = "humidity";
    Type[Type["light"] = 2] = "light";
    Type[Type["moisture"] = 3] = "moisture";
})(Type = exports.Type || (exports.Type = {}));
class SensorValue {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
exports.SensorValue = SensorValue;
