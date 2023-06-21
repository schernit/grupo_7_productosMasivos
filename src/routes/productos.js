const express = require ("express");
const router = express.Router();
const multer = require('multer'); // Requerimos Multer
const productosController = require ("../controllers/productosController.js");
const path = require("path");
const authMiddleware = require ("../middlewares/authMiddleware.js");
const guestMiddleware = require ("../middlewares/guestMiddleware.js");

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

//router.get("/listar", guestMiddleware, productosController.listar);

//creacion de un producto
router.get("/creacion_producto",authMiddleware, productosController.creacion_producto); 
router.post("/creacion_producto", upload.single("imagen"),productosController.creacion_store); 

//edicion de un producto
router.get("/edicion_producto/:id", authMiddleware, productosController.edicion_producto); 
router.patch("/edicion_producto/:id", upload.single("imagen"), productosController.update_producto); 

//eliminar producto
router.delete('/delete/:id',authMiddleware, productosController.destroy);

module.exports = router;  