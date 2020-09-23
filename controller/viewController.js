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
  res.render("update", {
    page: "edit",
    abbr: req.query,
  });
};

exports.getFavorites = async (req, res, next) => {
  try {
    const favorites = await Abbreviation.find({ favorite: true });
    res.render("favorites", {
      page: "favorites",
      favoritesList: favorites,
    });
  } catch (error) {
    res.status(505).json({
      status: "fail",
      error: error,
      message: error.message,
    });
  }
};

exports.getSearchPage = async (req, res, next) => {
  try {
    // console.log(req.query);
    // console.log(req.originalUrl);
    let results = [];
    let query = "";
    if (req.query.abbr) {
      query = req.query.abbr.toUpperCase();
      results = await Abbreviation.find({ abbreviation: query });
    }
    console.log(results);
    res.render("search", {
      page: "search",
      searchList: results,
      query,
    });
  } catch (error) {}
};
