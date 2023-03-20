const express = require ("express");
const app = express();
const router = express.Router();

const controlador = {

    listarProductos : (req,res) => {
        res.render("carrito");            
    },
    
    modificarCantidadProducto : (req,res) => {
        res.render("carrito");           
    },

    eliminarProducto: (req,res) => {
        res.render("carrito");              
    },

    agregarProducto: (req,res) => {
        res.render("carrito");          
    }
};

module.exports = controlador;