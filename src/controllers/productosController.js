const express = require ("express");
const app = express();
const router = express.Router();
const path = require ("path");

app.set ("views",path.join(__dirname, "../views"));

const controlador = {

    detalle_producto : (req,res) => {
        res.render("detalle_producto")            
    }

};

module.exports = controlador;