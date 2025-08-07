
// fork (child process)

// process.on("message", (msg)=>{
//     console.log("data reciving from child : ", msg);

//     process.send("data sending from child process")
// })


////////////////////

// WORKSER THREAD.JS //

const {parentPort,workerData, threadId} = require("worker_threads")

const {name, value} = workerData

let result = value
for(let i = 1 ; i <= 10 ; i++){
    result += i
}

parentPort.postMessage(result)

parentPort.postMessage(threadId)
