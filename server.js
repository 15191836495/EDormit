/* 
{
    "M":"say",
    "ID":"1212313",
    "C":[
        {
            "led":1,
            "pwm":1,
            "bulb":1,
            "mac":1

        }
    ]
}


*/
// 前端http通信
let net = require('net');
let PORT = 8124;
let HOST = '0';
let http = require('http');
const body = '';
var server = http.createServer(function (req, res) {
    
    req.on('data', function(data) {      // 接收客户端发送过来的数据， 也就是 xmlHttp.send(value);
        body += data ;
        console.log(JSON.parse(data.tostring()));
        socket.write(data);
    });
    req.on('end', function() {
        res.writeHeader(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'    //解决跨域问题
        });
        res.write("hello:" + body);
        res.end();
    })
});
server.listen(3000, function () {
    console.log('server start at localhost:3000');
});
// tcp服务端
//开始监听
let server = net.createServer(function(socket){
    console.log('Server：start to listen');
// 接收数据并处理   处理nodemcu数据在这里
    socket.on(`data`, function(data){
        // 转字符串输出控制台
        // json格式 登录请求{"M":"checkin","ID":"xx1","K":"xx2"}\n
        // Server 数据发送{"M":"say","ID":"xx1","C":"xx2","SIGN":"xx3"}\n
        //console.log(data);
        let data1 = data.toString();
        let data2 = JSON.parse(data1);
        console.log(data2.M);
        if (data2.M === "checkin"){
            
        }
        else {
            
        }

//接收数据返回字符串 发送操作在这里
        //收到solution发来的json数据
        //socket.write('solution.mesg \n');
    });

    socket.on('close', function(){
        console.log('Server: disconnection!');
    });
});
// 服务器开始运行
server.listen(PORT, HOST, function(){
    console.log('The Server begin to run.');
});