const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000', {reconnect: true});
console.log("*****************");
socket.on('connect', function(){});
socket.on('event', data=>{
    console.log("****",data)
});