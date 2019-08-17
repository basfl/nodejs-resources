const express = require("express")
const bodyParser = require('body-parser');

const monoConnect = require('./util/database')
const productAdmin = require('./routes/products')

const connect=monoConnect.mongoConnect
const app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", productAdmin)


connect(() => {
    app.listen(3000);
})