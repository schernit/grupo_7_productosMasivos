const express = require ("express");
const app = express();
const router = express.Router();
const path = require ("path");

app.set ("views",path.join(__dirname, "../views"));

const controlador = {

    login : (req,res) => {
        res.render("login")            
    },
    
    register : (req,res) => {
        res.render("register")           
    }

};

module.exports = controlador;