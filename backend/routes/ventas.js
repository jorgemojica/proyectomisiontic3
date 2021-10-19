
const express = require("express");
const router = express.Router();

//const Ventas = require('../models/ventas')


const VentasController = require("../controllers/ventas");

router.get("", VentasController.getVentas);

router.post("", VentasController.addVentas);
router.delete("/:id", VentasController.deleteVentas);

//router.get("/disponibles", ProductController.getProductoDisponible);
router.get("/:id", VentasController.getVentasId);
router.put("/:id", VentasController.editVentastId);
/*

router.get("/disponibles", ProductController.getProductoDisponible);
router.get("/:id", ProductController.getProductId);
*/
module.exports = router;