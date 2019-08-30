const express = require("express")
const routes = express.Router()

routes.get("/", (req, res, next) => {
    console.log("***********")
    req.session.isLoggedIn = true
    res.redirect("/api")
})

routes.get("/api", (req, res, next) => {
    if (req.session.isLoggedIn === true) {
        res.send("api********")
    } else {
        res.send("sorry")
    }

})

module.exports = routes