const fs = require("fs");
const path = require ("path");  
const db = require("../src/database/models");
const Op = db.Sequelize.Op;
//const productos=null;


const productos = db.Productos.findAll({
        
})

.then(productos => {
    console.log(productos);
    //res.render("moviesList", {usuarios})
    
})
.catch(error => {
    res.send(error)
})



module.exports = productos;