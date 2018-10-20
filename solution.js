/* 
我准备在这里把咱们与mcu通信数据的结构声明一下
json{
    第一位 1 灯类{
        第二位   1:Normal Led1  
                第三位 0 stop  1 play
                2:流水灯 
                第三位 0 stop  1 play
                3:继电器电灯泡 
                第三位 0 stop  1 play

    }
    第一位 2 电器类{
        1:风扇 
            第三位 0 stop  1 play
    }
}

//{"M":"checkin","ID":"xx1","K":"xx2"}


*/

var EventEmitter = require('events').EventEmitter;     // 引入事件模块
var event = new EventEmitter();     // 实例化事件模块
//var  commend = {"M":"say","ID":"xx1","C":"xx2","SIGN":"xx3"};  // commend 从html发来的json数据格式。
var launchmesg = function(){
    var mesg111 = {"M":"say","C":"111",};
    event.emit('launchingo');     // 发射(触发)事件
}
event.on('launchingo', function() {
    exports.mesg = mesg111;       // 暴露变量到server.js
});

//console.log(json.C); 
