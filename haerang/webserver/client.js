var net =require('net');
const { POINT_CONVERSION_COMPRESSED } = require('constants');

var socket=net.connect(8080,'localhost',function(){
    console.log('client start');

});


socket.on('data',function(data){
    console.log(data.toString());
})

process.stdin.resume();
process.stdin.on('data',function(chunk){
    socket.write('ECHO:'+chunk);
})