const fs = require("fs");
const path = require ("path");  

let rutaProductos = path.join(__dirname, "productos.json")
console.log (rutaProductos);

let miArchivoJson = fs.readFileSync (rutaProductos,"utf-8");

let jsonProductos = JSON.parse(miArchivoJson);

let arrayProductosStock = jsonProductos.Productos;

//console.table (arrayProductosStock);

//console.log(convertidos.Personas[0]);

module.exports = arrayProductosStock;