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

const {body} = require("express-validator")

const validations = [
    body("nombre").notEmpty().withMessage("Introduzca un nombre."),
    body("apellido").notEmpty().withMessage("Introduzca un apellido."),
    body("email")
        .notEmpty().withMessage("Introduzca un email.").bail()
        .isEmail().withMessage("Debe introducir un email válido"),
    body("categoria").notEmpty().withMessage("Introduzca una categoría."),
    body("password").notEmpty().withMessage("Introduzca una contraseña."),
    body("imagen").custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png"]
        
        if(!file){
            throw new Error("Debe subir una imágen")
        } else {
            let fileExtension = path.extname(file.originalname);
            
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error("Debe subir una imágen con formato .jpg o .png")
            }

        }

        return true
    })
]

router.post("/register",upload.single("imagen"), validations , usuariosController.processRegister)

router.get("/login", usuariosController.login),

router.post("/login", usuariosController.processLogin)


module.exports = router;  