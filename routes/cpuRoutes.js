const express = require("express");
const cpuController = require("../controller/cpuController");

const router = express.Router();

// REST API routes

// prettier-ignore
router.
  route("/").
  get(cpuController.getAllTmps).
  post(cpuController.createTmp);

router.get("/:id", cpuController.getTmp);

module.exports = router;
