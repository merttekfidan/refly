const express = require("express");
const {
  getAllOffers,
  getOneOffer,
  addOffer,
  updateOffer,
  deleteOffer,
  uploadOfferImages,
  resizeOfferImages,
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
  .patch(
    protect,
    restrictTo("admin", "user"),
    uploadOfferImages,
    resizeOfferImages,
    updateOffer
  )
  .delete(protect, restrictTo("admin", "user"), deleteOffer);

module.exports = router;
