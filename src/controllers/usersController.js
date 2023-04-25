const express = require ("express");
const app = express();
const router = express.Router();
const fs = require("fs");
const path = require ("path");  
const usersFilePath = path.join(__dirname, '../data/users.json');
const bcryptjs = require("bcryptjs");
const {validationResult} = require("express-validator")


const controlador = {

    login : (req,res) => {
        res.render("login");            
    },
    
    register : (req,res) => {
        res.render("register");            
    },

    processRegister: (req,res) => {

        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            return res.render("register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {

        let users = JSON.parse(fs.readFileSync (usersFilePath,"utf-8"));

        //console.log (req.body);

		/* Idea: aprovechar destructuring (...req.body)*/

		/* Crear producto nuevo */
		/* Para el id, tomar el ultimo elemento, chequear su id y sumarle 1 */
		
		let usuarioNuevo = {
			id: users[users.length - 1].id + 1,
            imagen: req.file ? req.file.filename : "default-image.png",
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
			categoria: req.body.categoria,
            password: bcryptjs.hashSync(req.body.password, 10) 
		};

		/* Pushear al array de productos */
    
		users.push(usuarioNuevo);
        //console.table (products);

		/* Reconvertir a JSON */
		let usersJSON = JSON.stringify(users, null, " ");

		/* Escribir en el archivo JSON en si */
		fs.writeFileSync(usersFilePath, usersJSON);
       
        res.redirect ("/");
    }}

};

module.exports = controlador;