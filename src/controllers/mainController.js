const express = require ("express");
const app = express();
const router = express.Router();
const productos = require ("../datosProductos.js");

const controlador = {

    index : (req,res) => {
        /* res.sendFile(app.get("views")+"/detalle_producto.html"); */   
        res.render ("index",{productos});         
    },
    contacto : (req,res) => {  
        res.render ("contacto");         
    },
    

};

module.exports = controlador;