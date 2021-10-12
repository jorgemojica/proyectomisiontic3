const mongoose = require("mongoose");

const producto = mongoose.Schema({
  nombre: { type: String, required: true },
  stock: { type: Number },
  precio: { type: Number, required: true }
});

module.exports = mongoose.model("Producto", producto);