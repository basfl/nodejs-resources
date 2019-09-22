const express = require("express");
const routes = express.Router();

routes.get("/", (req, res, next) => {
    console.log("inside");
    res.render('index');

});

routes.post("/action", (req, res, next) => {
    console.log("inside");
    const name = req.body.name;
    const image = req.file;
    // if (!image) {
    //     const error = new Error('Please upload a file')
    //     error.httpStatusCode = 400
    //     return next(error)
   // }
    console.log("name-> ", name);
    console.log("image-> ", image)
    res.send("done");

});

module.exports = routes;