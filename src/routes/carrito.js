const express = require ("express");
const app = express();
const router = express.Router();
const path = require ("path");

app.set ("views",path.join(__dirname, "../views"));

router.get("/", function(req, res){
    res.sendFile(app.get("views")+"/carrito.html");                
})

module.exports = router;  