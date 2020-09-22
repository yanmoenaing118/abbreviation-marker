const Abbreviation = require("./../models/abbreviationModel");

exports.getAllAbbreviations = async (req, res, next) => {
  try {
    const allAbbrs = await Abbreviation.find();
    res.status(200).json({
      total_abbrs: allAbbrs.length,
      status: "success",
      data: {
        results: allAbbrs,
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
exports.getAbbreviation = async (req, res, next) => {
  try {
    const abbr = await Abbreviation.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        result: abbr,
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
exports.createAbbreviation = async (req, res, next) => {
  try {
    const newAbbr = await Abbreviation.create(req.body);
    if (req.url.startsWith("/new")) {
      return res.redirect("/");
    }
    res.status(201).json({
      status: "success",
      data: {
        result: newAbbr,
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
exports.updateAbbreviation = async (req, res, next) => {
  try {
    console.log(req.body);
    const updatedAbbr = await Abbreviation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    if (req.url.startsWith("/update")) {
      return res.redirect("/");
    }
    res.status(200).json({
      status: "success",
      data: {
        result: updatedAbbr,
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
exports.deleteAbbreviation = async (req, res, next) => {
  try {
    await Abbreviation.findByIdAndDelete(req.params.id);

    if (req.url.startsWith("/delete")) {
      return res.redirect("/");
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(505).json({
      status: "fail",
      error: error,
      message: error.message,
    });
  }
};

exports.addToFavoriteList = async (req, res, next) => {
  try {
    console.log(req.body);
    const updatedAbbr = await Abbreviation.findByIdAndUpdate(
      req.params.id,
      {
        favorite: true,
      },
      {
        runValidators: true,
        new: true,
      }
    );
    if (req.url.startsWith("/add")) {
      return res.redirect("/");
    }
    res.status(200).json({
      status: "success",
      data: {
        result: updatedAbbr,
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
