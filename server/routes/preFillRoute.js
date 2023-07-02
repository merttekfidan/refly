const express = require("express");
const { getLocations } = require("./../controllers/preFillController");

const router = express.Router();

router.get("/all-locations", getLocations);

module.exports = router;
