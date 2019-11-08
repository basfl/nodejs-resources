const express=require('express');
const routes=require('./routes/route');
const app=express();

app.use("/api",routes)
const server = app.listen(3000,()=>{
    console.log("server started!")
});
const io=require('./socket').init(server);
io.on('connection', socket => {
    console.log('Client connected');
});
