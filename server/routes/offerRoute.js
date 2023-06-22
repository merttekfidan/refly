const express = require("express");
const {
  getAllOffers,
  getOneOffer,
  addOffer,
  updateOffer,
  deleteOffer,
} = require("./../controllers/offerController");
const { protect, restrictTo } = require("./../controllers/authController");
const router = express.Router();

router
  .route("/")
  .get(getAllOffers)
  .post(protect, restrictTo("admin", "user"), addOffer);
router
  .route("/:offerId")
  .get(getOneOffer)
  .patch(protect, restrictTo("admin", "user"), updateOffer)
  .delete(protect, restrictTo("admin", "user"), deleteOffer);

module.exports = router;
