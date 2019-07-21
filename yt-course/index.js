const Person = require('./person');
const Logger = require("./logger")
const p = new Person("john", "32")
p.greeting()
console.log("***")
logger = new Logger()
logger.on("message", (data) => {
    console.log("called listener", data)
})

logger.log("hello!!!")