
const http = require("http")

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/plain"
    })
    res.end("Welcime to server")
})



server.listen(3000, ()=> console.log(`http://localhost:3000`))


app.use((req,res,next)=>{
    req.set("Cache-Control", "no-stor")
    next()
})