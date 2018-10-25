let PORT = 8124;
let HOST = '127.0.0.1';
let net = require('net');
var fs = require("fs");
const check9 = {
    "M":"checkingood"
}
// tcp服务端
//开始监听
let server = net.createServer(function(socket){
    console.log('Server：start to listen');
// 接收数据并处理   处理nodemcu数据在这里
    socket.on(`data`, function(data){
        // 转字符串输出控制台
        let data1 = data.toString();
        let data2 = JSON.parse(data1); 
        if(data2.M === 'mcustaus')  {
           
           fs.writeFile('mcustaus.json',data,function(err) {
            if (err) {
                return console.error(err);
            }
            console.log('动态缓存已更新'); })
            fs.readFile('com.json', function (err, data3) {
                if (err) {
                   return console.error(err);
                }
                socket.write(data3);
             });

        } 
        else if (data2.M ==='com'){
            console.log(data2.M);
            fs.writeFile('mcustaus.json',data,function(err) {
                if (err) {
                    return console.error(err);
                }
                console.log('前端数据已收到'); }) 
        }  
        
        
    });
    socket.on('close', function(){
        console.log('Server: disconnection!');
    });
});
// 服务器开始运行
server.listen(PORT, HOST, function(){
    console.log('The Server begin to run.');
});