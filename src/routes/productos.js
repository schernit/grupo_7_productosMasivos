const express = require ("express");
const router = express.Router();
const productosController = require ("../controllers/productosController.js");

/* router.get("/detalle_producto:idProducto?", productosController.detalle_producto);  */

router.get("/detalle_producto/:id/", productosController.detalle_producto);
router.get("/creacion_producto", productosController.creacion_producto); 
router.get("/edicion_producto", productosController.edicion_producto); 

module.exports = router;  