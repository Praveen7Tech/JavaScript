
// FORK //

// const {fork} = require("child_process")

// const child = fork("./child.js")

// child.send("Data sending from main process")

// child.on("message", (msg)=>{
//     console.log("data recieving from main process :", msg)
// })

// // child.js
// process.on("message", (msg)=>{
//     console.log("data recieved", msg)

//     process.send("data from child")
// })

/////////////////////////////

// SPAWN //

// const {spawn} = require("child_process")

// const child = spawn("node", ["child.js"])

// child.stdout.on("data",(data)=>{
//     console.log("data from child", data)
// })

// child.stderr.on("data", (data)=>{
//     console.error("error ", data)
// })

// child.on("close", (code)=>{
//     console.log("child process exited with code :", code)
// })

// // child.js

// for(let i = 1 ; i <= 10 ; i++){
//     console.log("stream data : ", i)
// }

///////////////////////////////////

// EXEC //

// import { exec } from "child_process";

// exec("node index.js", (error, stdout, stderr)=>{
//     if(error){
//         console.error("error in creating exec", error.message)
//     }

//     if(stderr){
//         console.error("error in child process", stderr)
//     }

//     console.log("data from child : ", stdout)
// })

////////////////////

// WORKER THREAD //

const {Worker, isMainThread, threadId} = require("worker_threads")

const worker = new Worker("./child.js",{
    workerData : {name : "praveen", value: 5000}
})

console.log("thread : ", isMainThread)
console.log("worker thread : ", threadId)

worker.on("message", (msg)=>{
    console.log("data from worker :",msg)
})

worker.on("error",(err)=>{
    console.error("worker error",err)
})

worker.on("exit", (code)=>{
    console.log("worker exited with code : ", code)
})

// // worker.js //

// const {parentPort} = require("worker_threads")

// let result = 0
// for(let i = 1 ; i <= 10 ; i++){
//     result += i
// }

// parentPort.postMessage(result)