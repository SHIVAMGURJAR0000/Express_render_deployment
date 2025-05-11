const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("render is working");
});

app.listen(PORT, () => {
  console.log("server is running......");
});
