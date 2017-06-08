"use strict";
/**
 * @author nstCactus
 * @date 20/10/16 22:56
 */
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractSensor {
    constructor(name, uid) {
        this.name = name;
        this.uid = uid;
    }
    getName() {
        return this.name;
    }
    getUID() {
        return this.uid;
    }
    ;
}
exports.AbstractSensor = AbstractSensor;
