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
        /* res.sendFile(app.get("views")+"/detalle_producto.html"); */   
        
        let id = req.params.id
		let producto = productos.find (producto => producto.id == id)
        res.render ("detalle_producto", {producto}); 
    }, 
    creacion_producto: (req,res) => {
        res.render ("creacion_producto");
    },
    creacion_store : (req,res) => {

        //let products = JSON.parse(fs.readFileSync (productsFilePath,"utf-8"));

        //console.log (req.body);

		/* Idea: aprovechar destructuring (...req.body)*/

		/* Crear producto nuevo */
		/* Para el id, tomar el ultimo elemento, chequear su id y sumarle 1 */
		
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

		console.log (productoNuevo);

		/* Pushear al array de productos */
    
		//products.push(productoNuevo);
        //console.table (products);

		/* Reconvertir a JSON */
		//let productsJSON = JSON.stringify(products, null, " ");

		/* Escribir en el archivo JSON en si */
		//fs.writeFileSync(productsFilePath, productsJSON);

		db.Productos.create(productoNuevo)
		.then(productos => {
            res.redirect("/")
		})
        .catch(error => {
            res.send(error)
        })

        //res.redirect ("/");
    },
    edicion_producto: (req,res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);
		res.render('edicion_producto', {productToEdit})
    },
    update_producto: (req,res) => {
        let id = req.params.id;
		/* Actualizar la información con el producto editado y guardarlo en el JSON */
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let productWithoutEdit = products.find(product => product.id == id);
		/* Editar producto */
		/* Para el id, tomar el ultimo elemento, chequear su id y sumarle 1 */
		
		let productoEditado = {
			id: id,
			imagen: req.file ? req.file.filename : productWithoutEdit.image,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            marca: req.body.marca,
			precio: parseInt(req.body.precio),
            moneda: "$",            
			oferta: parseInt(req.body.oferta),
			categoria: req.body.categoria,
			precioDescuentoLeyenda : "$350 la 2da unidad"
		};

		/* Reemplazar el producto en el array*/
		let indice = products.findIndex(product => {
			return product.id == id
		})
		products[indice] = productoEditado;

		/* Reconvertir a JSON */
		let productsJSON = JSON.stringify(products, null, " ");

		/* Escribir en el archivo JSON en si */
		fs.writeFileSync(productsFilePath, productsJSON);

		/* Redireccionar */
		res.redirect ("/");
    },
    destroy : (req, res) => {
		let id = req.params.id;

		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let finalProducts = products.filter(product => {
			return product.id != id
		})
		
		/* Reconvertir a JSON */
		let productsJSON = JSON.stringify(finalProducts, null, " ");

		/* Escribir en el archivo JSON en si */
		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect("/");
	}
}

module.exports = controlador;