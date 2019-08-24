const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const connection_string = require('./util/decrept')
const apiRoute = require('./routes/route')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", apiRoute)


const PORT = process.env.PORT || 3000
mongoose.connect(connection_string).then(result => {
    app.listen(3000)
}).catch(err => {
    console.log(MediaStreamError)
})
// app.listen(PORT, () => {
//     console.log("servers start running on port ", PORT)
// })