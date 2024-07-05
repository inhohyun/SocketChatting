const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());  // JSON 파싱 미들웨어 추가

mongoose.connect(process.env.DB, {}).then(() => {
    console.log("connected to database");
}).catch(err => {
    console.error("Failed to connect to database", err);
});

module.exports = app;
