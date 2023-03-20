const express = require ("express");
const app = express();
const router = express.Router();
const path = require ("path");  
const productos = require ("../datosProductos.js");

app.set ("views",path.join(__dirname, "../views"));

router.get("/", (req,res) => {

    res.render("index",{productos});
    
});

router.get("/contacto", (req,res) => {
    res.render("contacto")           
});


module.exports = router;  