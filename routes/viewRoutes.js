const express = require("express");
const viewController = require("./../controller/viewController");
const abbreviationController = require("./../controller/abbreviationController");

const router = express.Router();

router.get("/", viewController.getHome);
router.get("/edit", viewController.getEditPage);
router.get("/new", viewController.getNewPage);

router.post("/new", abbreviationController.createAbbreviation);
router.get("/delete/:id", abbreviationController.deleteAbbreviation);
router.post("/update/:id", abbreviationController.updateAbbreviation);
router.get("/add/:id", abbreviationController.addToFavoriteList);

module.exports = router;
