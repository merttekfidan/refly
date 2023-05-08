const express = require("express");
const cors = require("cors");
const glabalErrorHandler = require("./controllers/errorController");
const carRoute = require("./routes/carRoute");
const accessoryRoute = require("./routes/accessoryRoute");
const motorcycleRoute = require("./routes/motorcycleRoute");
const scooterRoute = require("./routes/scooterRoute");
const offerRoute = require("./routes/offerRoute");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/car", carRoute);
app.use("/accessory", accessoryRoute);
app.use("/motorcycle", motorcycleRoute);
app.use("/scooter", scooterRoute);
app.use("/offer", offerRoute);

app.use(glabalErrorHandler);
module.exports = app;
