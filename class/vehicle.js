class Vehicle {
    constructor(modelName, year, price) {
        this.modelName = modelName;
        this.year = year;
        this.price = price;
        this.reviews = []
    }
   validate() {
    const valid = this.modelName && this.year && this.price;
    const validYear = this.year >= 1950 && this.year <= 2100
      if(valid && validYear) {
        return true
      } else {
        return false
      }
   }

   update (modelName, year, price) {
    const notYear = year >= 1950 && year <= 2100
    if(!notYear) {
      throw new Error ("Year must be between 1950 and 2100")
    } else if(price < 1) {
      throw new Error ("Price must be greater than 0")
    } else {
        this.modelName = modelName;
        this.year = year;
        this.price = price;
    }
   }
}

module.exports = Vehicle
