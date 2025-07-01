
// DELAY FUNCTION USING PROMISE

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

////////////////////

// ARRAY CAN BE INHERITED IN JS

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

///////////////////

// EVAL()

// eval("let x = 10; console.log(x)")
// const num = 10;
// eval("console.log(num + 10)")

// eval("console.log('Hello world')")

///////////////////////@ts-check

// WEAK REFERENCE

// let obj = {name : "Praveen"}

// const weakRef = new WeakRef(obj)

// console.log(weakRef.deref())

// // WEAK MAP

// let user = {name : "Praveen"}

// const weakMp = new WeakMap()
// weakMp.set(user, "user data")

// user = null                        // obj reference make null so obj, GB
// console.log(weakMp.get(user))

// /////////////////

// // WEAK SET

// const weakst = new WeakSet()

// let obj1 = {a : 1}
// let obj2 = {b : "Name"}

// weakst.add(obj1)
// weakst.add(obj2)

// console.log(weakst.has(obj1))

// weakst.delete(obj1)

// console.log(weakst.has(obj1))

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

// let date = new Date()

// let day = String(date.getDate()).padStart(2, "0")
// let month = String(date.getMonth() + 1).padStart(2, "0")
// let year = String(date.getFullYear())

// console.log(`${day}/${month}/${year}`)

// check all provided objects are empty

// function isEmpty(obj){
//   return obj && typeof obj === "object" && Object.keys(obj).length === 0
// }

// let obj = {}
// console.log(isEmpty(obj))

//////////////////


// REMOVE LARGEST STRING FROM ARRAY

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

///////////////

// MERGE OBJECT WITHOUT REPLACE

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4, d: 5 };

// let merged = {...obj1}

// for(let key in obj2){
//   if(!(key in merged)){
//     merged[key] = obj2[key]
//   }
// }

// console.log(merged)


// GENERATOR FUNCTION

// function* generator(){
//   yield "step 1";
//   yield "step 2";
//   yield "step 3";
//   yield "step 4"
// }

// const gen = generator()

// console.log(gen)

//////////////////////////

// PROXY OBJECT 

// let obj = {name : "Praveen"}

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

//////////////////

//DEEP COPY


// const obj = {
//     name :"Praveen",
//     details:{
//         place: "ekm"
//     }
// }

// let copy = JSON.parse(JSON.stringify(obj))

// copy.name = "Rohith"
// copy.details.place = "kollam"

// console.log(obj)
// console.log(copy)

/////////////

// HiGHER ORDER FUNCTION (return another function)

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