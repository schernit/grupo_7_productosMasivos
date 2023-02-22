const express = require ("express");
const path = require ("path");

const app = express();

//rutas estaticas
app.set ("views",path.join(__dirname, "/views"));
app.use(express.static("public"));


//abro puerto del servidor
app.listen(3000, () => {
    console.log ("servidor corriendo");
});

//busco index 
app.get("/", (req,res) => {
    res.sendFile(app.get("views")+"/index.html");            
});

app.get("/contacto.html", (req,res) => {
    res.sendFile(app.get("views")+"/contacto.html");            
});

app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, "views/register.html"))
})

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "views/login.html"))
})
/*
app.get("/views", (req,res) => {
    try{
        res.sendFile(path.join (__dirname, "/views2/index.html"));
    }
    catch(err){
        console.log ("123ee");
        console.log (err.console);
    }
});
*/