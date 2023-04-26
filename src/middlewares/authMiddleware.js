function authMiddleware(req,res,next){
    if (req.session.users != undefined){
            next()
    }else{
        return res.send("Esta pagina es solo para usuarios");
    }

};

module.exports = authMiddleware;