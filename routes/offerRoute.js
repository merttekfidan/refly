const express = require("express");
const {
  getAllOffers,
  addOffer,
  updateOffer,
} = require("./../controllers/offerController");

const router = express.Router();

router.route("/").get(getAllOffers).post(addOffer);
router.route("/:offerId").patch(updateOffer);

module.exports = router;
