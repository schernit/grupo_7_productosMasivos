const express = require ("express");
const app = express();
const router = express.Router();
const db = require("../database/models");
const Op = db.Sequelize.Op;
//const productos = require ("../controllers/productosController.js");

const controlador = {

    index : (req,res) => {

        const productos = db.Productos.findAll()
        
        .then(productos => {
            //console.log(productos);
            res.render ("index",{productos}); 
            
        })
        .catch(error => {
            res.send(error)
        })
        
    },
    contacto : (req,res) => {  
        res.render ("contacto");         
    },

};

module.exports = controlador;