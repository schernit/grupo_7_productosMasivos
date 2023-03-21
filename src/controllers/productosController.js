const express = require ("express");
const app = express();
const router = express.Router();
/* const path = require ("path"); */
const productos = require ("../datosProductos.js");


/* app.set ("views",path.join(__dirname, "../views")); */

const controlador = {

    detalle_producto : (req,res) => {
        /* res.sendFile(app.get("views")+"/detalle_producto.html"); */   
        
        let id = req.params.id
		let producto = productos.find (producto => producto.id == id)
        res.render ("detalle_producto", {producto}); 
    }, 
    creacion_producto: (req,res) => {
        res.render ("creacion_producto");
    },
    edicion_producto: (req,res) => {
        res.render ("edicion_producto");
    }

}

module.exports = controlador;