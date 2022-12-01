import express from "express";
import dotenv from "dotenv";
import parkingAreaData from "./routes/index.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/parkingarea", parkingAreaData);

app.listen(5000, () => console.log("Connected to backend"));
