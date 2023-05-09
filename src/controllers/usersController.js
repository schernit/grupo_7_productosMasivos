const express = require ("express");
const app = express();
const router = express.Router();
const fs = require("fs");
const path = require ("path");  
const usersFilePath = path.join(__dirname, '../data/users.json');
const bcryptjs = require("bcryptjs");
const {validationResult} = require("express-validator");
const { use } = require("../routes/users");
const { error } = require("console");
const db = require("../database/models");
const usuarios = require("../database/models/usuarios");
const Op = db.Sequelize.Op;

const controlador = {

    listar: (req,res) => {
        db.Usuarios.findAll({
            
        })
        .then(usuarios => {
            //res.render("moviesList", {usuarios})
            res.send(usuarios)
        })
        .catch(error => {
            res.send(error)
        })
    }, 

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
    }},

    processLogin: (req, res) => {
       
    const resultValidation = validationResult(req);

    if(resultValidation.errors.length > 0){
        console.log("login fallido");
        console.log(resultValidation.mapped());
            return res.render("login", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            console.log("login sin errores");

     let users = JSON.parse(fs.readFileSync (usersFilePath,"utf-8"));
      
     let user = users.find(user => user.email == req.body.email);
            
     if(user == undefined){
        console.log ("No existe el usuario");
        let errors = {
            password: {
              value: '11',
              msg: 'El usuario no esta registrado',
              param: 'password',
              location: 'body'
            }
          }
        return res.render("login", {
        errors: errors,
        oldData: req.body})
     }else{
        //USUARIO ENCONTRADO;
        if(bcryptjs.compareSync(req.body.password, user.password)){
            req.session.user = user; 
            res.redirect("/");
        }else{
            let errors = {
                password: {
                  value: '11',
                  msg: 'Usuario o contraseña inválido',
                  param: 'password',
                  location: 'body'
                }
              }
            return res.render("login", {
            errors: errors,
            oldData: req.body})
        }
     }
     
    }
    }
}

     /*    for (let i= 0; i < users.length; i++){
            if (req.body.email == users[i].email && bcryptjs.compareSync(req.body.password, users[i].password)){
            req.session.users = users;        */
       /*      return res.redirect("/");    */
            
           // });
       // } ;      
              
    
   /*       res.render ("login");   */
        
        
      


module.exports = controlador;
 