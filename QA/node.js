// Child- proces

const express = require('express')
const {fork} = require('child-process')

//const app = express()
app.use(expressjson())

app.post("/uploads",(req,res)=>{
    console.log("File recieved..")

    // create child process
    const child = fork("./backGroundProcess.js")

    // send data to child process
    child.send({filePath : "video.mp4"})

    // listern message from child
    child.on("message", (msg)=>{
        console.log("From child ", msg)
    })

    res.send("Uploads recieved..., Processing in background")
})


app.listen(3000, ()=> console.log(`Server runing on http://localhost:3000`))

//////////////////////

("./backGroundProcess.js")

process.on("message", (data)=>{
    console.log("Child recieved", data)

    // simulate heavy task
    setTimeout(()=>{
        // task compleate send back message
        process.send("Video processed successfully")
    },4000)
})

////////////////////////

// Route Chaining

const express = require('express');
const app = express();

app.route('/user')
  .get((req, res) => {
    res.send('GET request to /user');
  })
  .post((req, res) => {
    res.send('POST request to /user');
  })
  .put((req, res) => {
    res.send('PUT request to /user');
  })
  .delete((req, res) => {
    res.send('DELETE request to /user');
  });

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
