const fs = require("fs");
const path = require ("path");  

let rutaProductos = path.join(__dirname, "data/productos.json")
//console.log (rutaProductos);

let miArchivoJson = fs.readFileSync (rutaProductos,"utf-8");

let arrayProductosStock = JSON.parse(miArchivoJson);

//console.table (arrayProductosStock);

//console.log(convertidos.Personas[0]);

module.exports = arrayProductosStock;