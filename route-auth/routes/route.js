const express = require("express");
const auth = require("../middleware/middleware");
const jwt = require('jsonwebtoken');
const uuidv4 = require('uuid/v4');
const route = express.Router();

//route.use(auth);
route.get("/login", auth, (req, res, next) => {
    console.log("login", req.p)
    //  route.use(auth);

    const token = jwt.sign({
       id:uuidv4(),
       p:true
    }, "somesupersupersupersecret", {
        expiresIn: "1h"
    });
    res.status(200).send({token:token})
})

route.get("/test",auth, (req, res, next) => {
   
    
        console.log("**************************" + req.p)
        res.send("good")
    

});

module.exports = route;