const express = require ("express");
const path = require ("path");
const app = express();

const rutasProductos = require("./routes/productos");
const rutasMain = require("./routes/main");
const rutasUser = require("./routes/users");
const rutasCarrito = require("./routes/carrito");

//rutas estaticas
app.set ("view engine","ejs");
app.set ("views",path.join(__dirname, "/views"));
app.use(express.static("public"));
app.use ("/productos",rutasProductos);
app.use ("/",rutasMain);
app.use ("/user",rutasUser);
app.use ("/carrito",rutasCarrito);
//app.set ("css",path.join(__dirname, "/views"));

//abro puerto del servidor
app.listen(3000, () => {
    console.log ("servidor corriendo");
});