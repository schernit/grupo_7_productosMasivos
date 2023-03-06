const express = require ("express");
const app = express();
const router = express.Router();
const path = require ("path");

app.set ("views",path.join(__dirname, "../views"));

const controlador = {

    login : (req,res) => {
        res.sendFile(app.get("views")+"/login.html");            
    },
    
    register : (req,res) => {
        res.sendFile(app.get("views")+"/register.html");            
    }

};

module.exports = controlador;