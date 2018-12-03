// Just a test... Not a part of the final project

var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000');

socket.emit('chat message', "Hey there!"); // first parameter is the type of message