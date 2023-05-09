const express = require("express");
const {
  getAllOffers,
  getOneOffer,
  addOffer,
  updateOffer,
  deleteOffer,
} = require("./../controllers/offerController");

const router = express.Router();

router.route("/").get(getAllOffers).post(addOffer);
router
  .route("/:offerId")
  .get(getOneOffer)
  .patch(updateOffer)
  .delete(deleteOffer);

module.exports = router;
