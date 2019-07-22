const express = require('express')
const path = require("path")
const members = require('./routes/api/members')
const logger=require('./middleware/logger')
const app = express()
// middleware
app.use(logger)
app.get("/", (req, resp) => {
    resp.send("<h1>welcome!</h1>")
})
app.use('/api/members', members)
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("servers start running on port ", PORT)
})
