$(function () {
    $.ajax({
        type: 'get',
        url: 'https://restapi.amap.com/v3/weather/weatherInfo',
        data:{
            key : '05838ff3ed9af4f583268faf4a48e677',
            city: '610116'
        },
        success: function (data) {
            console.log(data);
            console.log(data.lives);
            var a = data.lives;
            $('#weather').text('当前天气 ' + a[0].province + a[0].city + ' ' + a[0].weather + ' ' + a[0].temperature + '℃ ');
            console.log(a[0].province);
        },
        error: function (xml) {
            alert(xml.status);
        }
    });
    // 获取电器状态信息
    $.ajax({
        type: 'post',
        url: 'com.json',
        dataType: 'json',
        success: function (data) {
            console.log(data);            
            if (data.led == '1'){
                $('#button3').text('开启电灯');
            }
            else{
                $('#button3').text('关闭电灯');
            }
            if (data.tv == '1'){
                $('#button2').text('开启电视');
            }
            else{
                $('#button2').text('关闭电视');
            }
            if (data.mac == '1'){
                $('#button1').text('开启空调');
            }
            else{
                $('#button1').text('关闭空调');
            }
        },
        error: function (xml) {
            console.log(xml.status);
        }
    })
    $('#button3').click(function () {
        if ($('#button3').text() == '开启电灯'){
            $.ajax({
                type: 'POST',               
                url: "http://39.106.102.143:8124",
                data: {
                    "M":"com",
                    "ID":"1212313",                                          
                    "led":0                           
                },
                success: function (data) {
                    console.log(data);
                },
                error: function (xml) {
                    console.log(xml.status);
                }
            })
            $('#button3').text('关闭电灯');
        }
        else{
            $.ajax({
                type: 'POST',
                
                url: "http://39.106.102.143:8124",
                data: {
                    "M":"com",
                    "ID":"1212313",                                          
                    "led":1                          
                },
                success: function (data) {
                    console.log(data);
                },
                error: function (xml) {
                    console.log(xml.status);
                }
            })
            $('#button3').text('开启电灯');
        }
    });
    $('#button2').click(function () {
        if ($('#button2').text() == '开启电视'){
            $.ajax({
                type:'POST',
                dataType: 'json',
                url: 'http://39.106.102.143:8124',
                data: {
                    "M":"com",
                    "ID":"1212313",                                          
                    "tv":0                           
                },
                success: function (data) {
                    console.log(data);
                },
                error: function (xml) {
                    console.log(xml.status);
                }
            })
            $('#button2').text('关闭电视');
        }
        else{
            $.ajax({
                type:'POST',
                dataType: 'json',
                url: 'http://39.106.102.143:8124',
                data: {
                    "M":"com",
                    "ID":"1212313",                                          
                    "tv":1                          
                },
                success: function (data) {
                    console.log(data);
                },
                error: function (xml) {
                    console.log(xml.status);
                }
            })
            $('#button2').text('开启电视');
        }
    });
    $('#button1').click(function () {
        if ($('#button1').text() == '开启空调'){
            $.ajax({
                type:'POST',
                dataType: 'json',
                url: 'http://39.106.102.143:8124',
                data: {
                    "M":"com",
                    "ID":"1212313",                                          
                    "mac":0                           
                },
                success: function (data) {
                    console.log(data);
                },
                error: function (xml) {
                    console.log(xml.status);
                }
            })
            $('#button1').text('关闭空调');
        }
        else{
            $.ajax({
                type:'POST',
                dataType: 'json',
                url: 'http://39.106.102.143:8124',
                data: {
                    "M":"com",
                    "ID":"1212313",                                          
                    "mac":1                         
                },
                success: function (data) {
                    console.log(data);
                },
                error: function (xml) {
                    console.log(xml.status);
                }
            })
            $('#button1').text('开启空调');
        }
    })
})
