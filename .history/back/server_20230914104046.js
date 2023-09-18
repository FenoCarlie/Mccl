const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

// Use cors() as a middleware function to enable CORS
app.use(cors());

// Create a connection to the database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mccl_db"
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Database connection error: " + err.message);
    } else {
        console.log("Connected to the database");
    }
});

app.get("/", (req, res) => {
    res.json("You are in the backend");
});

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
