
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

// const promise1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("promise 1")
//     },3000)
// })

// const promise2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("promise 2")
//     },1500)
// })

// const promise3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("promise 3")
//     },1000)
// })

// Promise.race([promise1,promise2,promise3])
// .then(result =>{
//   console.log("success",result)
// })
// .catch(error =>{
//   console.log("rejected",error)
// })

///////////////////////////

// Second Largest value from array

// let arr = [1,25,3,4,5,6]

// let large = 0
// let second = 0
// let third = 0

// for(let num of arr){
//     if(num > large){
//         third = second
//         second = large
//         large = num
//     }
//     else if(num > second && num < large){
//         second = num
//     }
//     else if(num > third && num < second){
//         third = num
//     }
// }
// console.log(large)
// console.log(second)
// console.log(third)

////////////////////////////

// Remove duplicate from array

//let arr = [10, 5, 10, 3, 12, 5, 7, 3, 30];

// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = i + 1 ; j < arr.length ; j++){
//         if(arr[i] === arr[j]){
//             for(let k = j ; k < arr.length ; k++){
//                 arr[k] = arr[k + 1]
//             }
//             arr.length--
//             j--
//         }
//     }
// }

// console.log(arr)

// remove all duplicate values from an array and show only unique

// let arr = [2, 5, 6, 2, 3, 5, 7, 8, 3];

// for(let i = 0 ; i < arr.length ; i++){
//     let count = 0
//     for(let j = 0 ; j < arr.length ; j++){
//         if(arr[i] === arr[j]){
//             count++
//         }
//     }
//     if(count > 1){
//         let val =  arr[i]
//         for(let k = 0 ; k < arr.length ; k++){
//             if(arr[k] === val){
//                 for(let m = k ; m < arr.length ; m++){
//                     arr[m] = arr[m + 1]
//                 }
//                 arr.length--
//                 k--
//             }
//         }
//         i--
//     }
// }

// console.log(arr)


// REMOVE DUPLICATES USING HOF (filter,reduce)

// let arr = [2, 5, 6, 2, 3, 5, 7, 8, 3];

//FILTER
// let ans = arr.filter((value, i, arr) => arr.indexOf(value) === arr.lastIndexOf(value))
// console.log(ans)

//REDUCE, FILTER
// let ans = arr.reduce((acc, curr)=>{
//     acc[curr] = (acc[curr] || 0) + 1
//     return acc
// },{})

// let final = arr.filter((value) => ans[value] === 1)

// console.log(final)


/////////////////////////////////

// ARROW FUNCTION

let sum = (a,b)=> a + b;
console.log(sum(5,8))

let arr = [1,2,3,4,5]
let ans = arr.reduce((acc, curr) => acc + curr ,0)
console.log(ans)

let sumValues = (...arr) => arr.reduce((acc, curr) => acc + curr ,0)
console.log(sumValues(2,4,6,8,10))
console.log(sumValues(1,3,5,7,9))