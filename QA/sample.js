
// Promise

// function myPromise(){
//     return new Promise((res,rej)=>{
//         let success = true
//         if(!success){
//             res("Operation Successfull")
//         }else{
//             rej("Operation Failed..")
//         }
//     })
// }

// myPromise().then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

/////////////////

// Promise.All()

// const promise1 = Promise.resolve("promise1")
// const promise2 = Promise.resolve("promise2")
// const promise3 = Promise.reject("promise3")

// Promise.all([promise1, promise2, promise3])
// .then((result)=>{
//     console.log("All promise were resolved", result)
// })
// .catch((error)=>{
//     console.log("Error occured in promise : ",error)
// })

// Promise.AllSetled()

// const promise1 = Promise.resolve("1")
// const promise2 = Promise.reject("2")
// const promise3 = Promise.resolve("3")

// Promise.allSettled([promise1, promise2, promise3])
// .then((result)=>{
//     console.log("all promise were settled",result)
// })

// Primise.any()

// const promise1 = Promise.reject("1")
// const promise2 = Promise.resolve("2")
// const promise3 = Promise.reject("3")

// Promise.any([promise1,promise2,promise3])
// .then((result)=>{
//     console.log("first resolved promise is ", result)
// })
// .catch((error)=>{
//     console.log(error)
// })

// Promise.race()

const promise1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise 1")
    },3000)
})

const promise2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("promise 2")
    },1500)
})

const promise3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("promise 3")
    },1000)
})

Promise.race([promise1,promise2,promise3])
.then(result =>{
  console.log("success",result)
})
.catch(error =>{
  console.log("rejected",error)
})