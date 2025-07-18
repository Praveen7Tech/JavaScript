
const http = require("http")
const fs = require("fs")
const filePath = "hello.txt"
const cron = require("node-cron")

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/plain"
    })
    res.end("Welcime to server")
})

// read files

fs.access(filePath, fs.constants.F_OK, (err)=>{
    if(err){
        console.log("file does not exist")
    }else{
        fs.readFile(filePath,"utf-8", (err,data)=>{
            if(err) throw err
            console.log("Data :",data)
        })
    }
})



server.listen(3000, ()=> console.log(`http://localhost:3000`))


app.use((req,res,next)=>{
    req.set("Cache-Control", "no-store")
    next()
})

//app.all()
app.all('*', (req, res) => {
  res.status(404).send('Route not found');
});


// connect DB


const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connctDB = async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected..")
    } catch (error) {
        console.log("Db connection error", error)
        process.exit()
    }
}

module.exports = connctDB


// CRON JOB

cron.schedule('0 9 * * *', ()=>{
    console.log("Running this code every day 9:00 AM")
})

///////////////////////////

// event emitter

const EventEmitter = require("events")

const myEvent = new EventEmitter()

myEvent.on("greet", (name)=>{
    console.log(`Hello ${name}`)
})

myEvent.emit("greet", "Praveen")

/////////////////// 


// JWT creation

const jwt = require("jswebtoken")

const userData ={id:123,name:"Praveen",role:"admin"}
const SecretKey = "MY_SECERET_KEY"

const token = jwt.sign(userData, SecretKey, {expiresIn:"1h"})

// verify token

const decoded = jwt.verify(token, SecretKey)

/////////////////////

// error handling using event

//const fs = require("fs")

const stream = fs.createReadStream("file.txt")

stream.on("error",(err)=>{
    console.err("File read error", err.message)
})