const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products");

router.get("", ProductController.getProducts);
router.post("", ProductController.addProduct);
router.delete("/:id", ProductController.deleteProduct);
router.get("/disponibles", ProductController.getProductoDisponible);
router.get("/:id", ProductController.getProductId);
router.put("/:id", ProductController.editProductId);

module.exports = router;