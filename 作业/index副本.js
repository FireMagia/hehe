var http=require('http')
var fs=require('fs')
http.createServer(function (req, res) {
    var url=req.url
    switch(url){
        case "/":
            fs.readFile("./index.html","utf-8", function (err,data) {
                if(err){
                    console.log("读取失败"+err)
                }else{
                    res.writeHead(200,{"content-type":"text/html"})
                    res.write(data)
                    res.end(" ")
                }
            })
            break;
        case "/index.css":
            fs.readFile("./index.css","utf-8", function (err,data) {
                if(err){
                    console.log("读取失败"+err)
                }else{
                    res.writeHead(200,{"content-type":"text/css"})
                    res.write(data)
                    res.end(" ")
                }
            })
            break;
        case "/index.js":
            fs.readFile("./index.js","utf-8", function (err,data) {
                if(err){
                    console.log("读取失败"+err)
                }else{
                    res.writeHead(200,{"content-type":"text/javascript"})
                    res.write(data)
                    res.end(" ")
                }
            })
            break;
        case "/1.gif":
            fs.readFile("./1.gif", function (err,data) {
                if(err){
                    console.log("读取失败"+err)
                }else{
                    res.writeHead(200,{"content-type":"image/gif"})
                    res.write(data)
                    res.end(" ")
                }
            })
            break;
        default:
            fs.readFile("./1.html", function (err,data) {
                if(err){
                    console.log("读取失败"+err)
                }else{
                    res.writeHead(200,{"content-type":"text/html"})
                    res.write(data)
                    res.end(" ")
                }
            })
    }
}).listen(3000)
