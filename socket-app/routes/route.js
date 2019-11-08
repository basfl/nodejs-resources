const express = require("express");
const io = require('../socket');
const flash = require('connect-flash');
const routes = express.Router()
routes.get("/start", (req, res, next) => {
    console.log("**************")
    res.send("start");
    io.getIo().emit("event", { for: req.flash("for") })
});

module.exports = routes;