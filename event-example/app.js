const express=require("express");
//const EventEmitter=require("events");
const routes=require("./routes/router");
//const emmiter=new EventEmitter();
const app=express();
var emitter = require('events').EventEmitter;
var em = new emitter();
sendData=()=>{
    console.log("*****");
    return ({
        data:"this is data"
    })
}
em.emit("action",sendData);


app.use("/api",routes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("servers start running on port ", PORT)
})