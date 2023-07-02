const express = require("express");
const {
  getVoivodeships,
  getCitiesByVoivodeship,
} = require("./../controllers/preFillController");

const router = express.Router();

router.get("/all-voivodeships", getVoivodeships);
router.get("/cities-by-voivodeship/:voivodeshipId", getCitiesByVoivodeship);

module.exports = router;
