import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("api running");
});

app.listen(5000, () => console.log("Conected"));
