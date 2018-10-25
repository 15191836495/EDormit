var http = require('http');
var fs = require("fs");
var server = http.createServer(function (req, res) {
    var body = '';
    req.on('data', function(data) {      // 接收客户端发送过来的数据， 也就是 xmlHttp.send(value);
        body += data;
        console.log(body);
        res.writeHeader(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'    //解决跨域问题
        });
        res.write('the commend is sending');
        res.end();
    });

    
});
server.listen(8124, function () {
    console.log('server start at localhost:8124');
});
