const Abbreviation = require("./../models/abbreviationModel");

exports.getHome = async (req, res) => {
  try {
    const abbrs = await Abbreviation.find();
    res.render("home", {
      title: "Abbreviation",
      abbrsList: abbrs,
      page: "home",
    });
  } catch (error) {
    res.status(505).json({
      status: "fail",
      error: error,
      message: error.message,
    });
  }
};

exports.getNewPage = (req, res) => {
  res.render("new", {
    page: "new",
  });
};

exports.getEditPage = (req, res) => {
  console.log(req.query);
  res.render("update", {
    page: "edit",
    abbr: req.query,
  });
};
