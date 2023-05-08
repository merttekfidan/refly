const express = require("express");
const {
  addAccessory,
  updateAccessory,
} = require("./../controllers/items/accessoryController");
const router = express.Router();

router.route("/").post(addAccessory);
router.route("/:offerId").patch(updateAccessory);

module.exports = router;
