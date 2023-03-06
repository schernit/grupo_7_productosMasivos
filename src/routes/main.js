const express = require ("express");
const app = express();
const router = express.Router();
const path = require ("path");

app.set ("views",path.join(__dirname, "../views"));

router.get("/", (req,res) => {
    res.sendFile(app.get("views")+"/index.html");            
});

router.get("/contacto", (req,res) => {
    res.sendFile(app.get("views")+"/contacto.html");            
});

module.exports = router;  