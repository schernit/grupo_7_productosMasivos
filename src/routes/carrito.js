const express = require ("express");
const app = express();
const router = express.Router();
const carritoController = require ("../controllers/carritoController.js");

router.get("/", carritoController.listarProductos);

module.exports = router;  