const express = require("express");
const {
  getAllBusinesses,
  getOneBusiness,
  addBusiness,
  updateBusiness,
  deleteBusiness,
} = require("./../controllers/businessController");

const router = express.Router();

router.route("/").get(getAllBusinesses).post(addBusiness);
router
  .route("/:businessId")
  .get(getOneBusiness)
  .patch(updateBusiness)
  .delete(deleteBusiness);

module.exports = router;
