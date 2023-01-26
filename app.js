const express = require ("express");
const path = require ("path");

const app = express();

app.listen(3000, () => {

    console.log ("servidor corriendo");
});

app.get("/", (req,res) => {

    res.sendFile(path.join(__dirname, "/views/index.html"));
    
});


app.get("/views2", (req,res) => {
    try{
        res.sendFile(path.join (__dirname, "/views2/index.html"));
    }
    catch(err){
        console.log ("123ee");
        console.log (err.console);
    }
    //res.send ("hola mundo");
});

