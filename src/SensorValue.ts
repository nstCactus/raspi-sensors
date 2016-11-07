/**
 * @author nstCactus
 * @date 20/10/16 23:12
 */

///<reference path="../typings/index.d.ts"/>

export enum Type { temperature, humidity, light, moisture }

export class SensorValue {
    public type:Type;
    public value:number;

    constructor (type:Type, value:number){
        this.type = type;
        this.value = value;
    }
}
