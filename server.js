let net = require('net');
//let solution = require('./solution.js')
// 现在可以直接从solution.js中引用commend变量 
// 格式  solution.commend
let PORT = 8124;
let HOST = '127.0.0.1';

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
            socket.write('commend checin recieve \n');
        }
        else {
            //断开连接
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