
const http = require("http")

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.end("Welcome to server wwww")
})

server.listen(3000, ()=> console.log(`http://localhost:3000`))