var http=require('http')
var fs=require('fs')
http.createServer(function (req, res) {
    console.log(req.url)
    if(req.url=="/"){
    //    发送index页面
        fs.readFile("./both/index.html","utf-8", function (err,data) {
            if(err){
                console.log("读取失败"+err)
            }else{
                res.writeHead(200,{"content-type":"text/html"})
                res.write(data)
                res.end(" ")
            }
        })
    }else if(req.url=="/index.css"){
        fs.readFile("./both/index.css","utf-8", function (err,data) {
            if(err){
                console.log("读取失败"+err)
            }else{
                res.writeHead(200,{"content-type":"text/css"})
                res.write(data)
                res.end(" ")
            }
        })
    }
    else if(req.url=="/index.js"){
        fs.readFile("./both/index.js","utf-8", function (err,data) {
            if(err){
                console.log("读取失败"+err)
            }else{
                res.writeHead(200,{"content-type":"text/javascript"})
                res.write(data)
                res.end(" ")
            }
        })
    }
    else if(req.url=="/1.gif"){
        fs.readFile("./both/1.gif", function (err,data) {
            if(err){
                console.log("读取失败"+err)
            }else{
                res.writeHead(200,{"content-type":"image/gif"})
                res.write(data)
                res.end(" ")
            }
        })
    }
}).listen(3000)
