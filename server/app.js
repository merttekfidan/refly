const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const glabalErrorHandler = require("./controllers/errorController");
const offerRoute = require("./routes/offerRoute");
const businessRoute = require("./routes/businessRoute");
const userRoute = require("./routes/userRoute");
const offerViewsRoute = require("./routes/offerViewsRoute");
const preFillRoute = require("./routes/preFillRoute");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your React app's origin
    credentials: true, // Enable sending cookies
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/offer", offerRoute);
app.use("/business", businessRoute);
app.use("/user", userRoute);
app.use("/views/offerViews", offerViewsRoute);
app.use("/preFill", preFillRoute);

app.use(glabalErrorHandler);
module.exports = app;
