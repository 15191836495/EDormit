/* 
我准备在这里把咱们与mcu通信数据的结构声明一下
json{
    第一位 1 灯类{
        1:Normal Led1  
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




*/
let json = {id:"133",name:"jackon",C:"11220"};
// commend 从html发来的json数据格式。
let commend = {"M":"say","ID":"xx1","C":"xx2","SIGN":"xx3"};
exports.mesg = commend;
console.log(json.C); 


exports.mesg = commend;

//{"M":"checkin","ID":"xx1","K":"xx2"}