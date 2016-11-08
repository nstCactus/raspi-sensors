/// <reference path="../typings/index.d.ts" />
/**
 * @author nstCactus
 * @date 20/10/16 23:12
 */
export declare enum Type {
    temperature = 0,
    humidity = 1,
    light = 2,
    moisture = 3,
}
export declare class SensorValue {
    type: Type;
    value: number;
    constructor(type: Type, value: number);
}
