const express = require ("express");
const app = express();
const router = express.Router();
const path = require ("path");

router.get("/", (req,res) => {
    res.render ("index");
});

router.get("/contacto", (req,res) => {
    res.sendFile(app.get("views")+"/contacto.html");            
});

module.exports = router;  