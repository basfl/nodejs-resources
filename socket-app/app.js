const express = require('express');
const routes = require('./routes/route');
const flash = require('connect-flash');
const middleMessage = require("./middleware/middle");
var session = require('express-session');
var cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser('secret'));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
app.use(middleMessage);
app.use("/api", routes)
const server = app.listen(3000, () => {
    console.log("server started!")
});
const io = require('./socket').init(server);
io.on('connection', socket => {
    console.log('Client connected');
});

