var app = require('express')(); // require returns a function, which is then called
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	
  /* socket.on('create	user', function(msg){
      io.emit(); // give user a name to be print before each message
  }); */
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg); // io.emit means broadcasting to every client
  });
  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


// client performs function calls
// ADD: change name message, improve GUI
