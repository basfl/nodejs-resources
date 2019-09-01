const express = require("express")
const routes = express.Router()

routes.get("/", (req, res, next) => {
    console.log("***********")
    req.session.isLoggedIn = true
    // res.redirect("/process")
    res.render('index')
})

routes.get("/api", (req, res, next) => {
    if (req.session.isLoggedIn === true) {
        req.session.destroy()
        res.send("api********")
    } else {
        res.send("sorry")
    }
    req.session.destroy()

 
})
routes.get("/process", (req, res, next) => {
    console.log("*******inside", req.session.isLoggedIn)
    if (req.session.isLoggedIn === true) {
        res.send("processing the data********")
    } else {
        res.send("sorry")
    }

})
routes.post("/process", (req, res, next) => {
    if (req.session.isLoggedIn === true) {
        res.send("processing the data********")
    } else {
        res.send("sorry")
    }

})

module.exports = routes