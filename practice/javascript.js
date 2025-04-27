  

//   // callback ///

//   function call(){
//     console.log("call me");
//   }

//   function main(callback){
//     console.log("first");

//     setTimeout(()=>{
        
//         callback();
//         console.log("finish");
//     },3000)
    
//   }

//   main(call)

//   function call(){
//     console.log("call me..");
    
//   }

//   function main (callback){

//     console.log('start')

//     setTimeout(()=>{
//         callback ()
//         console.log("finish")
//     },3000)
//   }

//   main(call)


//   function factorial(n){
     
//     let result=1;
//     for(let i=1;i<=n;i++){
//         result *= i;
//     }
//     return result;
//   }

//   console.log(factorial(10));

//   const person = {
//     name: "John",
//     greet: function (message) {
//       console.log(this.name +" says : "+ message );
//     },
//   };
  
//   const anotherPerson = {
//     name: "Alice",
//   };
  
//   person.greet.call(anotherPerson, " Hello!"); // Alice says: Hello!

//   'use strict';

//   var num = 01234;

//   console.log(num);


//   function sum(...numbers){
//     let result=0;
//     for(let num of numbers){
//       result+= num;
//     }
//     return result;
//   }

//   console.log(sum(1,2,3));

//   const abc={
//     var x=10,
//     fn : function(){
//         console.log(this.name)
//     }
// };
// abc.fn();


// ////////////////


// const person = {
//   name: 'John',
//   sayName: function () {
//     console.log(this.name); // Refers to the 'person' object
//   },
// };

// person.sayName(); // Outputs 'John'


// / DEEP COPY ////


// let array = [1,2,3,4]

// let deep = JSON.parse(JSON.stringify(array))

// deep[2]=10

// console.log(deep)

// console.log(array)

// ///////////////

// let array = [5,6,8,7,3,10]

// let smallest= array.reduce((min, num)=>{
//   if(num < min);
//   smallest = num;
// })  


// console.log(smallest);



// let array = [5, 6, 8, 7, 3, 10];

// let smallest = array.reduce((min, num) => {
//   return num < min ? num : min;
// }, array[0]); // Initialize with the first element of the array

// console.log(smallest);


// let round = Math.pow(5,2)

// console.log(round)


// let random = Math.random()

// console.log(random)


// / INSTANCE ////

// function car( make, model){

//   this.make = 1;
//   this.model = 2;
// }

// let mycar = new car('toyota' , 'fortuner')

// console.log(mycar instanceof car)



// //Function to add 2 to a number
// function addTwo(x) {
//   return x + 2;
// }


// // Function to multiply a number by 3
// function multiplyByThree(x) {
//   return x * 3;
// }

// // Now, let's compose them to create a new function
// const addTwoAndMultiplyByThree = (x) => multiplyByThree(addTwo(x));

// // You can use the composed function like this:
// const result = addTwoAndMultiplyByThree(5); // Result will be 21 (add 2, then multiply by 3)

// console.log(result)

//// FUNCTION COMPOSITION //

// const fn1 = (x) => x + 2;

// const fn2 = (x) => x * 3;

// const compose = (x) => fn2(fn1(x));

// const result = compose(6);

// console.log(result)


//// HIGHER ORDER FUNCTION ///


// function operate(a ,b ,operation){
//   return operation(a ,b)
// }

// function add(a , b){
//   return a + b;
// }

// function subtract(a , b){
//   return a - b;
// }

// const result1 = operate(3 , 4 , add);

// console.log(result1)

// const result2 = operate(7 , 5, subtract)

// console.log(result2)

////////////////////

// Function that returns a Promise
// const fetchRandomNumber = () => {
//   return new Promise((resolve, reject) => {
//     // Simulating a delay with setTimeout
//     setTimeout(() => {
//       const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99

//       // Simulating success or failure
//       if (randomNumber > 50) {
//         resolve(randomNumber); // Resolve the Promise with the random number
//       } else {
//         reject("Number is too low!"); // Reject the Promise with an error message
//       }
//     }, 1000); // 1 second delay
//   });
// };

// // Using the Promise
// fetchRandomNumber()
//   .then((number) => {
//     console.log("Fetched random number:", number);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });


// function fetchUserData() {
//     const fetchUserData = new Promise((resolve, reject) => {
//         console.log("Fetching user data...");

//         setTimeout(() => {
//             const success = true; 

//             if (success) {
//                 const userData = { name: "Alice", age: 30 };
//                 resolve(userData);
//             } else {
//                 reject("Failed to fetch user data");
//             }
//         }, 2000);
//     });



// fetchUserData
//     .then(data => {
//         console.log("User Data:", data); 
//     })
//     .catch(error => {
//         console.log("Error:", error); 
//     });




   // Function that returns a Promise
// function fetchUserData  () {
//     return new Promise((resolve, reject) => {
//         console.log("Fetching user data...");

//         setTimeout(() => {
//             const success = true; 

//             if (success) {
//                 const userData = { name: "Alice", age: 30 };
//                 resolve(userData);
//             } else {
//                 reject("Failed to fetch user data");
//             }
//         }, 2000);
//     });
// };

// // Async function to fetch user data
// async function async ()  {
//     try {
//         const data = await fetchUserData(); // Wait for the Promise to resolve
//         console.log("User Data:", data);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// };

// // Call the async function
// async();


// function data(){
//   return new Promise((res,rej) =>{
//     console.log("fetching data....");

//     setTimeout(()=>{
//         const success = true;
//         if(success){
//           const userdata ={name:"praveen",age:25}
//           res(userdata)
//         }
//         else{
//           rej("eroor occured")
//         }
//     },3000)
//   })
// };

// async function async(){
//   try{
//     const result = await data()
//     console.log(result)
//   }
//   catch(error){
//     console.log(error);
  
//   }
// }

// async()
// data()
// .then(data=>{
//   console.log("userdata : ",data)
// })
// .catch(error=>{
//   console.log(error)
// })

////IIFE ///

// let x = 30;

// (function fn(){
//     let x = 20;
//     console.log(x)
// })();

// console.log(x);