const express = require("express");
const { getRecentOffers } = require("./../controllers/offerViewsController");

const router = express.Router();

router.get("/get-recent-offers", getRecentOffers);

module.exports = router;
