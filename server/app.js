const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const glabalErrorHandler = require("./controllers/errorController");
const offerRoute = require("./routes/offerRoute");
const businessRoute = require("./routes/businessRoute");
const userRoute = require("./routes/userRoute");

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/offer", offerRoute);
app.use("/business", businessRoute);
app.use("/user", userRoute);

app.use(glabalErrorHandler);
module.exports = app;
