const express = require ("express");
const app = express();
const router = express.Router();

router.get("/", function(req, res){
    res.sendFile(app.get("views")+"/carrito.html");                
})

module.exports = router;  