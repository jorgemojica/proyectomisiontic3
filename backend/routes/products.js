const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products");
const auth = require("../middleware/auth")

router.get("",auth, ProductController.getProducts);
router.post("", auth, ProductController.addProduct);
router.get("/disponibles", auth, ProductController.getProductoDisponible);
router.get("/:id", auth, ProductController.getProductId);
module.exports = router;