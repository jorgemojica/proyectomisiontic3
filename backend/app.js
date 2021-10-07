var express = require('express')
var app = express()

const productsRouts = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/products", productsRouts);

module.exports = app;