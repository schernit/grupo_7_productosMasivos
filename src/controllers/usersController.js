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
        db.Usuarios.findAll({attributes: ['id', 'nombre', 'apellido' , 'email']})
        .then(usuarios => {
            //res.render("moviesList", {usuarios})
            return res.json({
                total: usuarios.length,
                data: usuarios,
                status: 200
            })
        })
        .catch(error => {
            res.send(error)
        })
    }, 

    listarUser: (req,res) => {

        let idUser = req.params.id;

        let campos = {attributes: ['id', 'nombre', 'apellido' , 'email', 'categoria', 'nombreImagen']};
        
        //let condicion = {where:{id:idUser}};
        //db.Usuarios.findOne(condicion)
        
        db.Usuarios.findByPk(idUser,campos)
        .then(usuario => {
            return res.json({
                data: usuario,
                status: 200
            })
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
		
		let usuarioNuevo = {
			//id: users[users.length - 1].id + 1,
            nombreImagen: req.file ? req.file.filename : "default-image.png",
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
			categoria: req.body.categoria,
            clave: bcryptjs.hashSync(req.body.password, 10) 
		};

		/* grabar en la base de dato de usuarios */
        db.Usuarios.create(usuarioNuevo)
		.then(usuario => {
            res.redirect("/")
		})
        .catch(error => {
            res.send(error)
        })

    }},

    processLogin: (req, res) => {
       
    const resultValidation = validationResult(req);

    if(resultValidation.errors.length > 0){
        //console.log("login fallido");
        //console.log(resultValidation.mapped());
            return res.render("login", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            //console.log("login sin errores");

    //let users = JSON.parse(fs.readFileSync (usersFilePath,"utf-8"));
    //let user = users.find(user => user.email == req.body.email);
    
    let mailUIngresado = req.body.email;
    let condicion = {where:{email:mailUIngresado}};

    db.Usuarios.findOne(condicion)
    .then(usuarioEncontrado => {

        console.log ("el usuario fue encontrado en la BD:"+usuarioEncontrado.nombre);
        if (usuarioEncontrado==null){
            console.log ("usuario no encontrado en la BD");
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
        
        console.log ("req.body.password: "+req.body.password);
        console.log ("usuarioEncontrado.password: "+usuarioEncontrado.clave);
        // chequeo el mail para el usuario encontrado
        if(bcryptjs.compareSync(req.body.password, usuarioEncontrado.clave)){
            req.session.user = usuarioEncontrado.id; 
            console.log ("coincide la clave");
            res.redirect("/");
        }else{
            console.log ("no coincide la clave");
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

    })
    .catch(error => {
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
    })

     
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
 