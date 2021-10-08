var express = require("express");
var mongoose = require("mongoose");
var app = express();

const productsRoutes = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(
    "mongodb+srv://duvan:735843.@cluster0.kench.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Estamos conectados");
  });

app.use("/api/products", productsRoutes);

module.exports = app;