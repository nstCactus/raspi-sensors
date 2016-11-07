/**
 * @author nstCactus
 * @date 24/10/16 12:57
 */

///<reference path="../../typings/index.d.ts"/>

import {AbstractSensor} from "../AbstractSensor";
import {SensorValue, Type} from "../SensorValue";

var ds18b20:Ds18b20 = require("ds18b20");

namespace Sensors {
    export class Ds18b20 extends AbstractSensor {
        read(decimals: number = 2): Array<SensorValue> {
            var value = ds18b20.readC(this.uid, decimals);
            return [new SensorValue(Type.temperature, value)];
        }

        static list(): Array<string> {
            return ds18b20.list();
        }
    }
}
