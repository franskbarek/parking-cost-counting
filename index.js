const express = require("express");
const handlebars = require("express-handlebars");
require("dotenv").config();
const apiRouter = require("./routes/api-router");
const parkingAreaRouter = require("./routes/index");

const app = express();
const hbs = handlebars.create({
  layoutsDir: __dirname + "/views/layouts",
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api", parkingAreaRouter);
app.use("/api", apiRouter);
app.use("/web", parkingAreaRouter);

app.listen(5000, () => console.log("💐🌻🌿 Connected 🌹🦋🌴🌸"));
