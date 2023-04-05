const express = require ("express");
const router = express.Router();
const multer = require('multer'); // Requerimos Multer
const productosController = require ("../controllers/productosController.js");
const path = require("path");

// ************ Multer config (indicar donde se guarda el archivo, y darle un nombre único) ************
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/img")
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname) )
        /* imagenProducto-3642746274.gif */
    }
})
const upload = multer({storage: storage});


// mostrar detalle del producto
router.get("/detalle_producto/:id/", productosController.detalle_producto);

//creacion de un producto
router.get("/creacion_producto", productosController.creacion_producto); 
router.post("/creacion_producto", upload.single("imagen"),productosController.creacion_store); 

//edicion de un producto
router.get("/edicion_producto/:id", productosController.edicion_producto); 
router.patch("/edicion_producto/:id", productosController.update_producto); 

module.exports = router;  