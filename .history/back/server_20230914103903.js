const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());

mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mccl_db"
})

app.get("/", (req, res) => {
    res.json("you are in the backend")
})

app.listen(8081, () => {
    console.log("listening");
})