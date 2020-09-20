const express = require("express");
const abbreviationController = require("./../controller/abbreviationController");

const router = express.Router();

router
  .route("/")
  .get(abbreviationController.getAllAbbreviations)
  .post(abbreviationController.createAbbreviation);

router
  .route("/:id")
  .get(abbreviationController.getAbbreviation)
  .patch(abbreviationController.updateAbbreviation)
  .delete(abbreviationController.deleteAbbreviation);

module.exports = router;
