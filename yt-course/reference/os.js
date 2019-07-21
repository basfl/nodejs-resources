const os = require('os');
console.log("platform is ", os.platform());
console.log("cpu arch", os.arch());
console.log("cpu core", os.cpus());
console.log("free memory", os.freemem());
console.log("up time",os.uptime())