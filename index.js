const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// const student = [];

//Adding new student

// app.post("/student", (req, res) => {
//   const { name, email, roll_number } = req.body;
//   if (!name || !email || !roll_number) {
//     return res
//       .status(400)
//       .json({ status: "error", message: "All fields are required" });
//   }

//   const newStudent = {
//     name,
//     email,
//     roll_number,
//   };

//   student.push(newStudent);

//   res.status(200).json({
//     status: "success",
//     message: "Student added Successfully",
//     data: student,
//     newStudent,
//   });
// });

app.get("/", (req, res) => {
  res.send("render is working");
});

app.post("/bfhl", (req, res) => {
  const data = req.body.data;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: "Data must be an array.",
    });
  }

  const numbers = data
    .filter(
      (item) =>
        typeof item === "string" && !isNaN(item.trim()) && item.trim() !== ""
    )
    .map((item) => Number(item.trim()));

  const alphabets = data.filter(
    (item) => typeof item === "string" && /^[a-zA-Z]$/.test(item.trim())
  );

  res.status(200).json({
    is_success: true,
    user_id: "Shivam_Gurjar_07042003",
    email_id: "shivamgurjar220386@acropolis.in",
    college_roll_number: "0827CY221057",
    numbers,
    alphabets,
  });
});

//odd even alphabets
app.post("/Abfhl", (req, res) => {
  const data = req.body.data;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      status: "error",
      message: "Data must be an array.",
    });
  }

  const { odd, even, alphabets } = data.reduce(
    (acc, item) => {
      if (typeof item !== "string") return acc;

      const trimmed = item.trim();

      // Check if it's a valid number
      if (!isNaN(trimmed) && trimmed !== "") {
        const num = Number(trimmed);

        // Consider only integers for odd/even
        if (Number.isInteger(num)) {
          num % 2 === 0 ? acc.even.push(num) : acc.odd.push(num);
        }
      }
      // Check if it's a valid single alphabet
      else if (/^[a-zA-Z]$/.test(trimmed)) {
        acc.alphabets.push(trimmed);
      }

      return acc;
    },
    { odd: [], even: [], alphabets: [] }
  );

  res.status(200).json({
    status: "success",
    user_id: "Shivam_Gurjar_07042003",
    email_id: "shivamgurjar220386@acropolis.in",
    college_roll_number: "0827CY221057",
    odd,
    even,
    alphabets,
  });
});

app.listen(PORT, () => {
  console.log("server is running......");
});
