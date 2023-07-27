const express = require('express');
const mongoose = require('mongoose');
const thumbnails = require('../routes/thumbnailRoute');
const products = require("../routes/productRoute");
const comments = require("../routes/commentRoute");
require('dotenv').config();

const DB_URL = process.env.DATABASE_URL;
mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
});

db.once("connected", () => {
    console.log("Database Connected");
});

const app = express();
app.use(express.json());

app.use("/products", products);
app.use("/thumbnails", thumbnails);
app.use("/comments", comments);

module.exports = app;