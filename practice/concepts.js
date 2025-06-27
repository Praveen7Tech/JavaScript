
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

eval("let x = 10; console.log(x)")
const num = 10;
eval("console.log(num + 10)")

eval("console.log('Hello world')")