const express = require ("express");
const app = express();
const router = express.Router();

router.get("/carrito", function(req, res){
    res.render("carrito");
    //res.sendFile(app.get("views")+"/carrito.html");                
})

module.exports = router;  