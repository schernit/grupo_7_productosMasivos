const express = require ("express");
const router = express.Router();
const usuariosController = require ("../controllers/usersController.js");
const productsController = require ("../controllers/productosController.js");
const multer = require('multer'); // Requerimos Multer
const path = require("path");
const guestMiddleware = require ("../middlewares/guestMiddleware.js");

//router.post("/register",upload.single("imagen"), validations , usuariosController.processRegister)

router.get("/users", guestMiddleware, usuariosController.listar),
router.get("/users/:id", guestMiddleware, usuariosController.listarUser),
router.get("/productos", guestMiddleware, productsController.apiListar),
router.get("/productos/:id", guestMiddleware, productsController.apiProductoDetalle),

//router.get("/login", guestMiddleware, usuariosController.login),

//router.post("/login", validationsLogin, usuariosController.processLogin)

module.exports = router;  