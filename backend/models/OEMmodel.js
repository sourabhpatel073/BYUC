const mongoose = require("mongoose");
const OEMSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    yearOfModel: { type: Number, required: true },
    listPrice: { type: Number, required: true },
    availableColors: {  type:[String],required: true, },
    mileage: { type: String, required: true },
    power: { type: Number, required: true },
    maxSpeed: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const OEMModel = mongoose.model("note", OEMSchema);

module.exports = { OEMModel };
