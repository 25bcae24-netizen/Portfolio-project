require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ MySQL Connection Pool (BEST PRACTICE)
const db = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Backend is working");
});

// ✅ Save Form Data
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Received:", req.body); // Debug

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.log("DB ERROR:", err);
      return res.status(500).send("Error saving data");
    }

    console.log("Data inserted successfully");
    res.send("Data saved successfully");
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});