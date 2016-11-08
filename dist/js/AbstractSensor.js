/**
 * @author nstCactus
 * @date 20/10/16 22:56
 */
"use strict";
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
