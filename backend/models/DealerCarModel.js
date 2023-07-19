const mongoose = require("mongoose");
const DealerCarSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    yearOfModel: { type: Number, required: true },
    listPrice: { type: Number, required: true },
    availableColors: {  type:[String],required: true, },
    mileage: { type: String, required: true },
    power: { type: Number, required: true },
    maxSpeed: { type: Number, required: true },
    author:{type:String,required:true},
    author_ID:{type:String,required:true},
    KMs_on_odometer:{type: Number, required: true},
    major_scratches:{type: Number, required: true},
    original_Paint:{type: String, required: true},
    number_of_accidents:{type: Number, required: true},
    Number_of_previous_buyers:{type: Number, required: true},
    registration_Place:{type: String, required: true}
  },
  //KMs on Odometer, Major Scratches, 
// Original Paint, Number of accidents reported, Number of previous buyers, Registration Place
  {
    versionKey: false,
  }
);

const DealerCarModel = mongoose.model("DealerCar", DealerCarSchema);

module.exports = { DealerCarModel };
