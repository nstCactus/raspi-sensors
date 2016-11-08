/// <reference path="../../typings/index.d.ts" />
/**
 * @author nstCactus
 * @date 24/10/16 12:57
 */
import { AbstractSensor } from "../AbstractSensor";
import { SensorValue } from "../SensorValue";
export declare class Ds18b20Sensor extends AbstractSensor {
    read(decimals?: number): Array<SensorValue>;
    static list(): Array<string>;
}
