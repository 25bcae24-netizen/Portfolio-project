require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// Middleware
  app.use(cors({
  origin: "https://25bcae24-netizen.github.io", // ✅ NO /Portfolio-project
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Connection
const db = mysql.createConnection({
  uri: process.env.MYSQL_URL
});

db.connect(err => {
  if (err) {
    console.log("DB Error:", err);
    return;
  } else {
    console.log("MySQL Connected");
  }
});

// API Route (SAVE FORM DATA)
app.get("/", (req, res) => {
  res.send("Backend is working");
});
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error saving data");
    }
    res.send("Data saved successfully");
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});