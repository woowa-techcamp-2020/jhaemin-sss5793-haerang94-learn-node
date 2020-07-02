var net=require('net');

net.createServer(function (socket){
    socket.on('data',function(data){
        console.log(data.toString('utf8'));
        socket.write(data);
    })
}).listen({
    host:'localhost',
    port:8080
},function(){
    console.log('server on');
})


