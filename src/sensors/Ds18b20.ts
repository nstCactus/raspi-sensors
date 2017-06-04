/**
 * @author nstCactus
 * @date 24/10/16 12:57
 */

///<reference path="../../typings/index.d.ts"/>

import {AbstractSensor} from "../AbstractSensor";
import {SensorValue, Type} from "../SensorValue";
const ds18b20: Ds18b20 = require("ds18b20-raspi");

export class Ds18b20Sensor extends AbstractSensor
{
    read(decimals: number = 2): Array<SensorValue>
    {
        const ds18b20Sensors: string[] = ds18b20.list();

        if (ds18b20Sensors.indexOf(this.uid) >= 0) {
            const value = ds18b20.readC(this.uid, decimals);
            return [new SensorValue(Type.temperature, value)];
        } else {
            console.warn(`Skipping ds18b20 sensor ${this.getName()} as no sensor with this id was found`);
        }
    }

    static list(): Array<string>
    {
        return ds18b20.list();
    }
}
