const express = require ("express");
const router = express.Router();
const usuariosController = require ("../controllers/usersController.js");
const multer = require('multer'); // Requerimos Multer
const path = require("path");

// ************ Multer config (indicar donde se guarda el archivo, y darle un nombre único) ************
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/img/usuarios")
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname) )
        /* imagenProducto-3642746274.gif */
    }
})
const upload = multer({storage: storage});


router.get("/register", usuariosController.register)
router.post("/register",upload.single("imagen") , usuariosController.processRegister)

router.get("/login", usuariosController.login)

module.exports = router;  