const express = require ("express");
const app = express();
const router = express.Router();
const fs = require("fs");
const path = require ("path");  
const productsFilePath = path.join(__dirname, '../data/productos.json');
const db = require("../database/models");
//const productos = require("../database/models/Productos");
const Op = db.Sequelize.Op;


/* const path = require ("path"); */
const productos = require ("../datosProductos.js");

/* app.set ("views",path.join(__dirname, "../views")); */

const controlador = {

	listar: (req,res) => {
        db.Productos.findAll()
        .then(productos => {
            //res.render("moviesList", {usuarios})
            res.send(productos)
        })
        .catch(error => {
            res.send(error)
        })
    }, 


    detalle_producto : (req,res) => {

        db.Productos.findByPk(req.params.id)
        .then(producto => {
            //res.render("moviesList", {usuarios})
            res.render ("detalle_producto", {producto}); 
        })
        .catch(error => {
            res.send(error)
        })

    }, 
    creacion_producto: (req,res) => {
        res.render ("creacion_producto");
    },
    creacion_store : (req,res) => {
		
		let productoNuevo = {
			//id:0,
            nombreImagen: req.file ? req.file.filename : "default-image.png",
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            marca: req.body.marca,
			precio: parseInt(req.body.precio),
            moneda: "$",            
			oferta: parseInt(req.body.oferta),
			categoria: req.body.categoria,
			precioDescuentoLeyenda : "$350 la 2da unidad"
		};

		//console.log (productoNuevo);

		db.Productos.create(productoNuevo)
		.then(productos => {
            res.redirect("/")
		})
        .catch(error => {
            res.send(error)
        })

    },
    edicion_producto: (req,res) => {

		db.Productos.findByPk(req.params.id)
        .then(productToEdit => {
            //res.render("moviesList", {usuarios})
			//console.log (productToEdit);
            res.render ("edicion_producto", {productToEdit}); 
        })
        .catch(error => {
            res.send(error)
        })

    },
    update_producto: (req,res) => {

        let idproductoEdutado = req.params.id;

		let productoEditado = {
			//id:0,
            nombreImagen: req.file ? req.file.filename : "default-image.png",
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            marca: req.body.marca,
			precio: parseInt(req.body.precio),
            moneda: "$",            
			oferta: parseInt(req.body.oferta),
			categoria: req.body.categoria,
			precioDescuentoLeyenda : "$350 la 2da unidad"
		};

		//console.log (productoEditado);

		let condicion = {where:{id:idproductoEdutado}};

		db.Productos.update(productoEditado,condicion)
		.then(producto => {
            res.redirect("/")
		})
        .catch(error => {
            res.send(error)
        })

    },
    destroy : (req, res) => {
		let idBorrar = req.params.id;

		let condicion = {where:{id:idBorrar}};

		db.Productos.destroy(condicion)
		.then(producto => {
            res.redirect("/")
		})
        .catch(error => {
            res.send(error)
        })

	}
}

module.exports = controlador;