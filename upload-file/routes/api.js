const express = require("express");
const auth = require('../middle-ware/isAuth');
const routes = express.Router();

routes.get("/", (req, res, next) => {
    console.log("inside", req.session.isLoggedIn = true);
    res.render('login');

});

routes.post("/login", (req, res, next) => {
    console.log("****", req.body.user);
    console.log("****", req.body.pass);
    if (req.body.user === "root" && req.body.pass == "admin") {
        console.log("hey")
        req.session.isLoggedIn =true;
        res.render("index");
    }
})

routes.post("/action", auth, (req, res, next) => {
    console.log("inside", req.session.isLoggedIn = true);
    const name = req.body.name;
    const image = req.file;
    console.log("name-> ", name);
    console.log("image-> ", image)
    res.send("done");

});

module.exports = routes;