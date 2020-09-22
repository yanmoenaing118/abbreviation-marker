const mongoose = require("mongoose");

const abbreviationSchema = new mongoose.Schema(
  {
    abbreviation: {
      type: String,
      required: [true, "Empty abbreviation"],
    },

    stands_for: {
      type: String,
      required: [true, "An abbreviation must have a long form!"],
    },

    description: {
      type: String,
      required: [true, "An abbreviation must have a description"],
    },

    createdAt: {
      type: Date,
      default: new Date(),
    },

    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Abbreviation = mongoose.model("Abbreviation", abbreviationSchema);

exports.schema = abbreviationSchema;
module.exports = Abbreviation;
