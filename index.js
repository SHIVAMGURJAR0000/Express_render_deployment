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

app.post("/getData", (req, res) => {
  const data = req.body.data;

  if (!Array.isArray(data)) {
    return res
      .status(400)
      .json({ status: "error", message: "Data must be an array." });
  }

  const numbers = [];
  const alphabets = [];

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else {
      alphabets.push(item);
    }
  });

  res.status(200).json({
    status: "success",
    user_id: "Shivam_Gurjar_07042003",
    email_id: "shivamgurjar220386@acropolis.in",
    college_roll_number: "0827CY221057",
    numbers,
    alphabets,
  });

  //   res.json({
  //     status: "true",
  //     data: data,
  //     message: "Data received successfully",
  //   });
});
app.listen(PORT, () => {
  console.log("server is running......");
});
