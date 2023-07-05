const http = require( "http")
const fs = require ("fs");
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        fs.readFile('text.json',"utf-8",
        (err,data) =>{
            const obj = JSON.parse(data)
            fs.writeFile("data.txt",JSON.stringify(obj),"utf-8",(err) => {
                res.end(data);
            })
        })
        
    }
})
server.listen(8080,"127.0.0.1",()=>{
    console.log("port no. done!")
})


