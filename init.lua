--init.lua
print("set up wifi mode")
wifi.setmode(wifi.STATION)
wifi.sta.config("esptest","12345678")
--here SSID and PassWord should be modified according your wireless router
wifi.sta.connect()
gpio.mode(11, gpio.OUTPUT)
gpio.mode(2, gpio.OUTPUT)
gpio.mode(3, gpio.OUTPUT)
tmr.alarm(1, 1000, 1, function()
if wifi.sta.getip()== nil then
print("IP unavaiable, Waiting...")
else
--tmr.stop(1)
print("Config done, IP is "..wifi.sta.getip())
http.post('http://ehome.sooyu.top/com.json',
  'Content-Type: application/json\r\n',
  '1',
  function(code, data)
    if (code < 0) then
      print("HTTP request failed")
    else
	json = cjson.decode(data)	  		
		if (json["led"]=="0")then
			gpio.write(2,gpio.LOW)
			print("led open")
		else 
			gpio.write(2,gpio.HIGH)
			print("led close")
		end
		if (json["tv"]=="0")then
			gpio.write(11,gpio.LOW)
			print("tv open")			
		else 
			gpio.write(11,gpio.HIGH)
			print("tv close")	
		end
		if (json["mac"]=="0")then
		gpio.write(3,gpio.LOW)
			print("mac open")	
		else 
			gpio.write(3,gpio.HIGH)
			print("mac close")	
		end
    end
  end) 
end
end)
