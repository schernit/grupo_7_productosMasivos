const express = require ("express");
const router = express.Router();
const productosController = require ("../controllers/productosController.js");

// mostrar detalle del producto
router.get("/detalle_producto/:id/", productosController.detalle_producto);

//creacion de un producto
router.get("/creacion_producto", productosController.creacion_producto); 
router.post("/", productosController.creacion_store); 

//edicion de un producto
router.get("/edicion_producto/:id", productosController.edicion_producto); 
router.patch("/edicion_producto/:id", productosController.update_producto); 

module.exports = router;  