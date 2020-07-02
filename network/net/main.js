const fs = require('fs')
const net = require('net')

net
  .createServer(function (socket) {
    socket.on('data', function (data) {
      // console.log(data.toString('utf8'))
      const requestData = data.toString('utf8')
      if (requestData.match('GET /index.html ')) {
        console.log('index.html')

        const indexHtml = fs.readFileSync('./index.html', 'utf8')

        const response = [
          'HTTP/1.1 200 OK',
          'Content-Type: text/html',
          'Status: 200',
          '',
          '',
          indexHtml,
        ].join('\r\n')

        socket.write(response)
        socket.end()
      } else {
        console.log('other paths')

        socket.write('')
        socket.end()
      }
    })
  })
  .listen(8080, function () {
    console.log('listening on port 8080')
  })
