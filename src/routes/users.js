const express = require ("express");
const app = express();
const router = express.Router();
const path = require ("path");

app.set ("views",path.join(__dirname, "../views"));

router.get("/register", function(req, res){
    res.sendFile(app.get("views")+"/register.html");                
})

router.get("/login", function(req, res){
    res.sendFile(app.get("views")+"/login.html"); 
})

module.exports = router;  