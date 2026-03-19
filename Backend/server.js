const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Connect MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Harshitaravi@2713",
  database: "portfolio"
});

db.connect(err => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("MySQL Connected ✅");
  }
});

// API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.send("Message saved ✅");
    }
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000 🚀");
});