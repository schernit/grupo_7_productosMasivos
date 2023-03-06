const express = require ("express");
const router = express.Router();
const productosController = require ("../controllers/productosController.js");

router.get("/detalle_producto:idProducto?", productosController.detalle_producto);

module.exports = router;  