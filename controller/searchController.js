const { query } = require("express");
const Abbreviation = require("./../models/abbreviationModel");

exports.searchAbbreviations = async (req, res, next) => {
  try {
    const abbr = req.query.abbr.toUpperCase();
    const results = await Abbreviation.find({ abbreviation: abbr });
    res.status(200).json({
      status: "success",
      data: {
        results,
      },
    });
  } catch (error) {
    res.status(505).json({
      status: "fail",
      error: error,
      message: error.message,
    });
  }
};
