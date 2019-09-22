const express=require("express");
const app=express();
module.exports= app.use((req, res, next) => {
    if(req.session.isLoggedIn === false){
        res.redirect("/");
    }
    next();
})
