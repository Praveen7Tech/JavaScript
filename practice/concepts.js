
// //DELAY FUNCTION USING PROMISE

const { get } = require("http")

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }


// async function fakeFetchUser() {
//   try {
//     console.log("⏳ Fetching user data...");

//     await delay(2000); // simulate 2s delay like an API call

//     const fakeUser = {
//       id: 1,
//       name: "Praveen",
//       email: "praveen@example.com",
//     };

//     console.log("✅ User data fetched:", fakeUser);
//   } catch (error) {
//     console.error("❌ Error in fetching user:", error.message);
//   }
// }

// fakeFetchUser()

// //////////////////

// //ARRAY CAN BE INHERITED IN JS

// class myArray extends Array {
//   constructor(...args){
//     super(...args)
//     this.customProperty = "Hello"
//   }

//   sayHello(){
//     console.log(this.customProperty)
//   }
// }

// const array = new myArray(1,2,3)
// console.log(array)
// console.log(array.length)
// array.push(4)
// console.log(array)
// array.sayHello()

// /////////////////

// EVAL()

// eval("let x = 10; console.log(x)")
// const num = 10;
// eval("console.log(num + 10)")

// eval("console.log('Hello world')")

// /////////////////////@ts-check

//WEAK REFERENCE

let obj = {name : "Praveen"}

const weakRef = new WeakRef(obj)

console.log(weakRef.deref())

// WEAK MAP

let user = {name : "Praveen"}

const weakMp = new WeakMap()
weakMp.set(user, "user data")

user = null                        // obj reference make null so obj, GB
console.log(weakMp.get(user))

// /////////////////

// WEAK SET

const weakst = new WeakSet()

let obj1 = {a : 1}
let obj2 = {b : "Name"}

weakst.add(obj1)
weakst.add(obj2)

console.log(weakst.has(obj1))

weakst.delete(obj1)

console.log(weakst.has(obj1))

// ///////////////////

// // STATIC KEYWORD

// class Car {
//   constructor(name) {
//     this.name = name;
//   }

//   static identify() {
//     return "I am a car class.";
//   }

//   showName() {
//     return `Car name is ${this.name}`;
//   }
// }

// const myCar = new Car("BMW");

// console.log(Car.identify());     
// console.log(myCar.showName());   

// //console.log(myCar.identify());  // Error


// ////////////////////////////

// // DATE FORMAT

// //let date = new Date()

// let day = String(date.getDate()).padStart(2, "0")
// let month = String(date.getMonth() + 1).padStart(2, "0")
// let year = String(date.getFullYear())

// console.log(`${day}/${month}/${year}`)

// //check all provided objects are empty

// function isEmpty(obj){
//   return obj && typeof obj === "object" && Object.keys(obj).length === 0
// }

// //let obj = {}
// console.log(isEmpty(obj))

// ////////////////


// //REMOVE LARGEST STRING FROM ARRAY

// const strings = ["car", "apple", "bikerrrrrrrrrrr", "elephant"];

// function removeLarge(arr){
//   let large = 0
//   let index = -1
//   for(let i = 0 ; i< arr.length ; i++){
//     if(arr[i].length > large){
//       large = arr[i].length
//       index = i
//     }
//   }

//   arr.splice(index, 1)
//   return arr
// }

// console.log(removeLarge(strings))

// /////////////
// //MERGE OBJECT WITHOUT REPLACE

// //const obj1 = { a: 1, b: 2 };
// //const obj2 = { b: 3, c: 4, d: 5 };

// let merged = {...obj1}

// for(let key in obj2){
//   if(!(key in merged)){
//     merged[key] = obj2[key]
//   }
// }

// console.log(merged)


// ///GENERATOR FUNCTION

// function* generator(){
//   yield "step 1";
//   yield "step 2";
//   yield "step 3";
//   yield "step 4"
// }

// const gen = generator()

// console.log(gen)

// ////////////////////////

// //PROXY OBJECT 

//let obj = {name : "Praveen"}

// const proxyObj = new Proxy(obj,{
//   get(target, prop){
//     console.log(`getting ${prop}`)
//     return target[prop]
//   },
//   set(target,prop,value){
//     console.log(`setting ${prop} to ${value}`)
//     return target[prop] = 25
//   }
// })

// console.log(proxyObj.name)
// proxyObj.age = 25
// console.log(proxyObj.age)

// ////////////////

// ///DEEP COPY


// // const obj = {
// //     name :"Praveen",
// //     details:{
// //         place: "ekm"
// //     }
// // }

// let copy = JSON.parse(JSON.stringify(obj))

// copy.name = "Rohith"
// copy.details.place = "kollam"

// console.log(obj)
// console.log(copy)

// ///////////

// //HiGHER ORDER FUNCTION (return another function)

// function Higher(num){
//   return function(value){
//     return num * value
//   }
// }

// const answer = Higher(5)
// console.log(answer(2))

// /////////////

// // 15 DAYS BEFORE DATE

// let today = new Date()
// let before = new Date()

// before.setDate(today.getDate() - 15)
// console.log(before.toDateString())

// //////////////

// // CURRENT TIME ONLY

// let now = new Date()
// let date = now.toLocaleDateString()
// let time = now.toLocaleTimeString()

// console.log(time)
// console.log(date)

// // throw error in every arguments are null

// function Check(...args){
//     const isNull = args.every(arg=> arg === null || arg == undefined)
    
//     if(isNull){
//         throw new Error("Every arguments are null..!")
//     }
//     console.log("Not all argumets are null")
// }

// Check(null,undefined)

// //////////

// ILLEGAL SHADOWING

// var x = 10
// {
//   let x = 20
//   console.log(x)
// }

///////////////////

// FLATTEN MULTIDIMENTIONAL ARRAY

// function Flatten(arr){
//   let result = []
//   for(let item of arr){
//     if(Array.isArray(item)){
//       result = result.concat(Flatten(item))
//     }else{
//       result.push(item)
//     }
//   }
//   return result
// }

// const arr = [1, [2, [3, [4, 5,6,7],8,9,10]],11];
// console.log(Flatten(arr))

// FREQUENCY OF ARRAY

// let arr= [1,2,3,1,4,5,2,7,3,8,5,10]

// let count = {}

// for(let num of arr){
//     count[num] = (count[num] || 0) + 1
// }

// let sort = Object.entries(count).sort((a,b)=> b[1] - a[1])

// console.log(sort)

// CURRYING 

function add(x){
    return function(y){
        return x + y
    }
}

const add1 = add(5)
const result = add1(4)

console.log(result)


// CALL , APPLY, BIND

const person1 ={name: "Praveen"}
const person2 ={name : "Felwin"}

function sample(msg){
    console.log(`${msg}, ${this.name}`)
}

sample.call(person2, "Hai")

//////////////////

// let user ={
//     name : "Praveen",
//     greet(msg){
//         console.log(`${msg}, ${this.name}`)
//     }
// }

// let user2 = {name : "Rohith"}

// user.greet.call(user2,"Hello")

//////////////////////////

// Prototype chaining

// const obj1 ={
//     msg(){
//         console.log("hello")
//     }
// }

// const obj2={
//     hello:"hello word"
// }

// Object.setPrototypeOf(obj2, obj1)

// console.log(obj1.hello)
// obj2.msg()

/////////////

// Encapsulation in OOPs
// class BankAccount {
//   #balance = 0; // private field

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount();
// account.deposit(1000);
// console.log(account.getBalance()); 

//console.log(account.#balance); // error

//////////////////////////

// Conditionally merge objects

// let obj1 = {a:1, b:2, c:3, d :4}
// let obj2 = {e:5, c:2, f:8, b:2}

// let result = {}
// for(let key in obj1){
//     if(key in obj2){
//         result[key] = [obj1[key], obj2[key]]
//     }else{
//         result[key] = obj1[key]
//     }
// }

// for(let key in obj2){
//     if(!(key in obj1)){
//         result[key] = obj2[key]
//     }
// }

// console.log(result)

///////////////////

// check all values are fractional

// function checkFractional(...args){
//     let isTrue = args.every(num => typeof num === "number" && !Number.isInteger(num))
    
//     if(isTrue){
//         throw new Error("all values are variadic ")
//     }
//     console.log("all are not variadic")
// }

// checkFractional(1.2, 3.5, 0.75)

//////////////////////

// Minutes passsed today

// let today = new Date()

// let dayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())

// let diff = today - dayStart

// let ans = Math.floor(diff/60000)

// console.log(today)
// console.log(dayStart)
// console.log(diff)
// console.log(ans)

///////////////////////////

// fetch 

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.error("error",error))


/////////////

// JWT expiry check

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjM1ODg2MDAsInVzZXIiOiJqb2huZG9lIn0.VwOyo3kERU5lbdYFb2-XXXXXX";

// const payload = token.split(".")[1]

// const payloadJson = atob(payload)

// const payloadObj = JSON.parse(payloadJson)

// const currentTime = Math.floor(Date.now()/1000)

// const isExpired = payloadObj < currentTime

// console.log(isExpired)

////////////////


// set enviorment variable without dotenv

// $env:PORT="5000"
// $env:NODE_ENV="development"
// node app.js

console.log(process.env.NODE_ENV)

////////////////////////

// proxy object

const person = {
    name : "Praveen"
}

const handler = {
    get(target,prop){
        return target[prop]
    },

    set(target,prop,value){
        target[prop] = value
        return true
    }
}

const proxy = new Proxy(person,handler)

console.log(proxy.name)
proxy.age = 25
console.log(proxy.age)