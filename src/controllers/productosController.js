const express = require ("express");
const app = express();
const router = express.Router();
const fs = require("fs");
const path = require ("path");  
const productsFilePath = path.join(__dirname, '../data/productos.json');

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
    creacion_store : (req,res) => {

        let products = JSON.parse(fs.readFileSync (productsFilePath,"utf-8"));

        //console.log (req.body);

		/* Idea: aprovechar destructuring (...req.body)*/

		/* Crear producto nuevo */
		/* Para el id, tomar el ultimo elemento, chequear su id y sumarle 1 */
		
		let productoNuevo = {
			id: products[products.length - 1].id + 1,
            imagen: req.file ? req.file.filename : "default-image.png",
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            marca: req.body.marca,
			precio: parseInt(req.body.precio),
            moneda: "$",            
			oferta: parseInt(req.body.oferta),
			categoria: req.body.categoria,
			precioDescuentoLeyenda : "$350 la 2da unidad"
		};

		/* Pushear al array de productos */
    
		products.push(productoNuevo);
        //console.table (products);

		/* Reconvertir a JSON */
		let productsJSON = JSON.stringify(products, null, " ");

		/* Escribir en el archivo JSON en si */
		fs.writeFileSync(productsFilePath, productsJSON);
       
        res.redirect ("/");
    },
    edicion_producto: (req,res) => {
        res.render ("edicion_producto");
    },
    update_producto: (req,res) => {
        res.render ("edicion_producto");
    }
}

module.exports = controlador;