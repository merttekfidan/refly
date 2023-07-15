const express = require("express");
const { getVoivodeships } = require("./../controllers/preFillController");

const router = express.Router();

router.get("/all-voivodeships", getVoivodeships);

module.exports = router;
