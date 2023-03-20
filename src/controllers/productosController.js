const express = require ("express");
const app = express();
const router = express.Router();
/* const path = require ("path"); */

/* app.set ("views",path.join(__dirname, "../views")); */

const controlador = {

    detalle_producto : (req,res) => {
        /* res.sendFile(app.get("views")+"/detalle_producto.html"); */   
        res.render ("detalle_producto"); 
    }, 
    creacion_producto: (req,res) => {
        res.render ("creacion_producto");
    },
    edicion_producto: (req,res) => {
        res.render ("edicion_producto");
    }

}

module.exports = controlador;