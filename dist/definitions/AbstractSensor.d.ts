/// <reference path="../typings/index.d.ts" />
/**
 * @author nstCactus
 * @date 20/10/16 22:56
 */
import { SensorValue } from "./SensorValue";
export declare abstract class AbstractSensor {
    protected name: string;
    protected uid: string;
    constructor(name: string, uid: string);
    getName(): string;
    getUID(): string;
    abstract read(): Array<SensorValue>;
}
