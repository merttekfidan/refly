const express = require("express");
const {
  getAllOffers,
  addOffer,
  updateOffer,
  deleteOffer,
} = require("./../controllers/offerController");

const router = express.Router();

router.route("/").get(getAllOffers).post(addOffer);
router.route("/:offerId").patch(updateOffer).delete(deleteOffer);

module.exports = router;
