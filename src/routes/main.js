const express = require ("express");
const app = express();
const router = express.Router();
const path = require ("path");  

const mainController = require ("../controllers/mainController.js");

router.get("/", mainController.index);

router.get("/contacto", mainController.contacto);


module.exports = router;  