const { validationResult } = require('express-validator/check')
exports.getIndex = ((req, res, next) => {
    res.send("hi");
})

exports.postSignup = ((req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirm = req.body.confirm;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log("error->", error.array());
        return res.status(422).send("error");
    }
    console.log("email->", email);
    console.log("pass->", password);
    console.log("confirm->", confirm);
})
