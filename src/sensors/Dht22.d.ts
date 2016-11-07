/// <reference path="../../typings/index.d.ts" />
/**
 * @author nstCactus
 * @date 24/10/16 22:10
 */
import { AbstractSensor } from "../AbstractSensor";
import { SensorValue } from "../SensorValue";
export declare class Dht22 extends AbstractSensor {
    static readonly sensorType: number;
    protected gpioPin: number;
    constructor(name: string, gpioPin: number);
    read(): Array<SensorValue>;
}
