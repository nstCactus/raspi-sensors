/**
 * @author nstCactus
 * @date 20/10/16 22:56
 */

///<reference path="../typings/index.d.ts"/>

import {SensorValue} from "./SensorValue";


export abstract class AbstractSensor {
    protected name: string;
    protected uid: string;

    constructor(name: string, uid: string) {
        this.name = name;
        this.uid = uid;
    }

    public getName(): string {
        return this.name;
    }

    public getUID(): string {
        return this.uid;
    };

    abstract read(): Array<SensorValue>
}
