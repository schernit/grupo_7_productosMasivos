const express = require ("express");
const path = require ("path");
const app = express();
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE
const session = require("express-session");
const cookieParser = require("cookie-parser");

const rutasProductos = require("./routes/productos");
const rutasMain = require("./routes/main");
const rutasUser = require("./routes/users");
const rutasCarrito = require("./routes/carrito"); //
const rutasApi = require("./routes/api"); //

//rutas estaticas
app.set ("view engine","ejs");
app.set ("views",path.join(__dirname, "/views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); // Para que se usa??
app.use(express.json()); // Para que se usa??
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE
app.use(session({secret: "String secreto para encriptar"})); 
app.use(cookieParser());

app.use ("/productos",rutasProductos);
app.use ("/",rutasMain);
app.use ("/user",rutasUser);
app.use ("/carrito",rutasCarrito);

//apis
app.use ("/api",rutasApi);

//app.set ("css",path.join(__dirname, "/views"));

//abro puerto del servidor
app.listen(3000, () => {
    console.log ("servidor corriendo");
});