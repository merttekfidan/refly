const express = require("express");
const cors = require("cors");
const glabalErrorHandler = require("./controllers/errorController");
const offerRoute = require("./routes/offerRoute");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/offer", offerRoute);

app.use(glabalErrorHandler);
module.exports = app;
