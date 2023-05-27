let Vehicle = require("./vehicle")

class bicycle extends vehicle {
    concstructor(style, frameSize, tireSize) {
       super(modelName, year, price)
       this.style = style;
       this.frameSize = frameSize;
       this.tiresize = tireSize;
    }
   }
module.exports = bicycle
