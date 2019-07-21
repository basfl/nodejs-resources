const EventEmitter = require("events")
class MyEmitter extends EventEmitter {

}
const myEmitter = new MyEmitter()

// event listener
myEmitter.on("event", (a,b) => {
    console.log("event fired!!!",a,b)
})
myEmitter.emit("event",1,2)