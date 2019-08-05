const express = require('express')
const routes = require('./routes/routes')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", routes)
app.listen(3000)