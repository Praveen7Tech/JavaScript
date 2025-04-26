  

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