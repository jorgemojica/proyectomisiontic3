var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();

const productsRoutes = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://duvan:735843.@cluster0.kench.mongodb.net/myFirstDatabase1?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Estamos conectados");
  });

app.use("/api/products", productsRoutes);

module.exports = app;