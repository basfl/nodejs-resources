const express = require('express');
const routes = require('./routes/route');
const app = express();
app.use((req, res, next) => {
    //req.p = true;
    next();
})
app.use("/api", routes);
app.listen(3000);

