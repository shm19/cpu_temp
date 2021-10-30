const mongoose = require("mongoose");

// cput shcema for mongodb
const cpuSchema = new mongoose.Schema(
  {
    temperature: {
      type: Number,
      required: [true, "cpu should have a temperature"],
    },
    host: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const cpuModel = mongoose.model("cpu", cpuSchema);

module.exports = cpuModel;
