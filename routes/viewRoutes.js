const express = require("express");
const viewController = require("./../controller/viewController");
const abbreviationController = require("./../controller/abbreviationController");

const router = express.Router();

router.get("/", viewController.getHome);
router.get("/new", viewController.getNewPage);
router.post("/new", abbreviationController.createAbbreviation);

module.exports = router;
