const bicycle = require("./bicycle.js");

class electricBicycle extends bicycle {
    constructor(modelName, year, price, style, frameSize, tireSize, range, maxSpeed) {
     super(modelName, year, price, style, frameSize, tireSize);
     this.range = range
     this.maxSpeed = maxSpeed
    }
}
module.exports = electricBicycle
