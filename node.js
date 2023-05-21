var express = require("express");

var app = express();
var fs = require("fs");
app.use(function(req,res){
 if(req.url == "/"){
  fs.readFile("index.html", (error, html) => {
   res.writeHead(200, {"Content-Type": "text/html"});
    res.write(html);        
   return  res.end();
});   
}else if(req.url == "/404.html"){
fs.readFile("404.html", (error,html)=>{
res.writeHead(200,{"Content-Type":"text/html"});
res.write(html);
return res.end();
});
}else{
  res.end();
}



});


app.listen(8000,function(){
  console.log("module calısıyor start verildi 8000 port");
});
