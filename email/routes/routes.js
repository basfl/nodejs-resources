const express = require("express")
const route = express.Router()

const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

const transport = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: "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"

    }
}))

route.get("/", (req, res, next) => {
    console.log("*************")
    res.render("signup")
})
route.post("/signup", (req, res, next) => {
    console.log("#########");
    const email = req.body.email;
    const content = req.body.content
    console.log("email is ", email, " content is ", content)
    res.send("email has been send sunccesfully!")
    return transport.sendMail({
        to: email,
        from: 'email-node@node-complete.com',
        subject: "signup successed!",
        html: "<h1>email!</h1>"
    }).catch(err => {
        console.log(err)
    })
})
module.exports = route