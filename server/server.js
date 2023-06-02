const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");
const DB = process.env.DB_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB is on");
  });

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log("Server is on");
});
