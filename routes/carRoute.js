const express = require("express");
const { addCar, updateCar } = require("./../controllers/items/carController");
const router = express.Router();

router.route("/").post(addCar);
router.route("/:offerId").patch(updateCar);

module.exports = router;
