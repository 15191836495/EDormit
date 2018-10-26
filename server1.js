//读取文件时必须经过两步操作
var http = require('http');
var fs = require("fs");
var querystring = require('querystring');
var server = http.createServer(function (req, res) {
    var body = '';
    req.on('data', function(data) {      
        body += data;        
        var data1 = data.toString();
        var data2 = querystring.parse(data1);
        console.log(data2);
 
        if(data2.M === 'mcustaus')  {
            var data5=JSON.stringify(data2);
           fs.writeFile('mcustaus.json',data5,'utf8',function(err) {
            if (err) {
                return console.error(err);
            }
            console.log('硬件状态已更新'); })
            
        } 
        else if (data2.M ==='com'){
            var data4=JSON.stringify(data2);
            fs.writeFile('com.json',data4,function(err) {
                if (err) {
                    return console.error(err);
                }
                console.log('前端数据已收到命令文件已经更改'); }) 
                
        
        res.writeHeader(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'    
        });
        res.write(' 命令已收到');
        res.end();
    }
    });
    

    
});
server.listen(8124, function () {
    console.log('server start at localhost:8124');
});
