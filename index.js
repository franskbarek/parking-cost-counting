const express = require("express");
require("dotenv").config();
const parkingAreaRouter = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api", parkingAreaRouter);

app.listen(5000, () => console.log("💐🌻🌿 Connected 🌹🦋🌴🌸"));
