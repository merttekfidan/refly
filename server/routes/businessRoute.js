const express = require("express");
const {
  getAllBusinesses,
  getOneBusiness,
  addBusiness,
  updateBusiness,
  deleteBusiness,
} = require("./../controllers/businessController");
const {
  isLoggedIn,
  protect,
  restrictTo,
} = require("./../controllers/authController");
const router = express.Router();

router
  .route("/")
  .get(getAllBusinesses)
  .post(protect, restrictTo("admin", "service"), addBusiness);
router
  .route("/:businessId")
  .get(getOneBusiness)
  .patch(protect, restrictTo("admin", "service"), updateBusiness)
  .delete(protect, restrictTo("admin", "service"), deleteBusiness);

module.exports = router;