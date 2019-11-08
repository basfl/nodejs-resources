const express = require("express");
const io = require('../socket');
const routes = express.Router()
routes.get("/start", (req, res, next) => {
    console.log("**************")
    res.send("start");
    io.getIo().emit("event", { for: 'everyone' })
});

module.exports = routes;