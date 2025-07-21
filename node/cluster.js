const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length;
console.log("num cpu",numCPUs)

if (cluster.isPrimary) {
  console.log(`Master PID 44: ${process.pid}`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart a worker if it dies
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });

} else {
  // Worker code
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello from Worker ${process.pid}`);
  }).listen(3000);

  console.log(`Worker PID: ${process.pid} started`);
}

/////////////////////////

// Process.NextTick()

console.log("1")

process.nextTick(()=>{
  console.log("2")
})

setTimeout(() => {
  console.log("3")
}, 0);

Promise.resolve().then(()=>{
  console.log("4")
})

console.log("5")

console.log(process.memoryUsage())