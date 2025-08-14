

const fn1= function(a,b){
  return a*b;
}

const fn2= (a,b) =>{
  return a+b;
}

const mult= fn1(3,20);

const add= fn2(10,2);

console.log(mult , add);


var arr =[1 ,20,35,7,60]

var a = Math.max(...arr)

console.log(a);


const obj1= {
  name : 'shibu',
  place : 'ernakulam',
  rank : 30
};


function fn(){


  const{
  name,
  place,
  rank
  } = obj1;

  console.log(name,place,rank);

}

fn();


const arr =[

  {
    name : 'shibu',
    mark : 50,
    place : 'kannur'
  },

  {
    name : 'babu',
    mark : 40,
    place : 'palakkad'
  },

  {
    name : 'manu',
    mark : 10,
    place : 'thrissur'
  },

  {
    name : 'sijo',
    mark : 25,
    place : 'kollam'
  }

]

var sum=0;
arr.forEach((item) =>{
  console.log(item.mark);
})


var found = arr.filter((item)=>{
  return item.mark < '30';
})

console.log(found);


var newarr =arr.map((item) =>{
  return {
    ...item,
    country : 'india'
  }
})

console.log(newarr);


var value = arr.reduce((total ,item) =>{
  return total + item.mark
},0)

console.log(value);

const element = document.getElementsByClassName("class");

for (let index = 0; index < element.length; index++) {
  
  console.log(element[index].textContent);
  
}


async function fetchData() {
      try {
          // Simulating a fetch with a timeout
          const data = await new Promise((resolve, reject) => {
              setTimeout(() => {
                  const success = Math.random() > 0.5; // Randomly succeed or fail
                  if (success) {
                      resolve({ message: 'Data fetched successfully!' });
                  } else {
                      reject(new Error('Failed to fetch data'));
                  }
              }, 1000); // Simulates a 1 second network delay
          });
    
          console.log(data); // Log the data if successful
      } catch (error) {
          console.error('Error fetching data:', error.message); // Handle the error
      }
    }
    
    // Call the function
    fetchData();
    
    
    
    //Callback function
    function notifyWhenDone() {
        console.log("The meal is ready!");
    
    }
    
    // Cooking function that accepts a callback
    function cookMeal(callback) {
        console.log("Cooking the meal...");
    
        // Simulate cooking time with setTimeout
        setTimeout(function() {
             //console.log("Meal is cooked!");
             callback(); // Call the callback function
            
        }, 3000); // 3 seconds
    }
    
    
    // Use the cookMeal function and pass the callback
    cookMeal(notifyWhenDone);
    
    ///////////////////////
    
    
    //Callback function
    
    function displayUserData(data) {
        console.log("User Data:", data);
    }
    
    // Function that simulates fetching data
    function fetchUserData(callback) {
        console.log("Fetching user data...");
        
        // Simulate an API call with setTimeout
        setTimeout(function() {
            // Simulated user data
            const userData = {
                name: "Alice",
                age: 30,
                city: "Wonderland"
            };
            
            // Call the callback function with the user data
            callback(userData);
        }, 2000); // 2 seconds
    }
    
    // Use the fetchUserData function and pass the callback
    fetchUserData(displayUserData);
    
    
    
    function fisrt(){
        console.log("detailst");
    }
    
    
    function main(callback){
        console.log("start")
    
        setTimeout(function(){
    
            // const obj={
            //     name:"praveen",
            //     age:25,
            //     place:"malappuram"
            // };
            console.log("end");
            callback(obj);
            
        },3000)
    }
    main(fisrt);
    
    function x(){
        var i=10;
        
        setTimeout(function(){
            console.log(i);
        },3000);
    
        console.log("hello");
    }
    x();
    
    
    / promise ////
    
    
    //Function that returns a promise
    function fetchUserData() {
        return new Promise((resolve, reject) => {
            console.log("Fetching user data...");
    
            // Simulate a delay with setTimeout
            setTimeout(() => {
                const success = false; // Change to false to simulate an error
    
                if (success) {
                    const userData = { name: "Alice", age: 30 };
                    resolve(userData); // Fulfill the promise with user data
                } else {
                    reject("Failed to fetch user data"); // Reject the promise with an error
                }
            }, 2000); // 2 seconds delay
        });
    }
    
    //Using the promise
    fetchUserData()
        .then(data => {
            console.log("User Data:", data); // Handle success
        })
        .catch(error => {
            console.log("Error:", error); // Handle error
        });
    
    
    
    
    
   // --------array---------
    
    
    
    
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    console.log(arr.find(x => x < 8));
    
    //------------------------------------------------------------------------------///
     
    1//
    
    let input =prompt("enter a char input");
    
    console.log("you entered  " + input);
    
    2  ////
    
    
    let input1 =parseInt(prompt("enter a intiger value"));
    let input2=parseFloat(prompt("enter a float value"));
    
    let sum=parseFloat(input1+input2);
    
    console.log("sum :" + sum);
    
    
    3 //
    
    let P = parseInt(prompt("principal amount "));
    let R = parseFloat(prompt("interest rate"));
    let N = parseFloat(prompt("number of years"));
    
    let SI = ((P*R*N)/100);
    
    console.log("simple interest :  " + SI);
    
    4 ///



    //////////////////////////////////



    
//move all values to beginning of the array

let //arr =[2,0,1,0,3,0,4,5,0]
//let count = arr.length-1

for(let i=arr.length-1;i>=0;i--){
    if(arr[i] !== 0){
        let temp = arr[i]
        arr[i] = arr[count]
        arr[count] = temp
        count--
    }
}

console.log(arr)

//move all zeros to end of the array

let count = 0

for(let i=0;i<arr.length;i++){
    if(arr[i] !== 0){
        let temp  = arr[i]
        arr[i] = arr[count]
        arr[count] = temp
        count++
    }
}

console.log(arr)

//reverse the array

let start = 0
let end = arr.length-1

while(start < end){
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

    start++
    end--
}

console.log(arr)

//let arr = [10, 55, 150, 3, 12, 20, 76, 2, 30];

for(let i=0;i<arr.length;i+=3){
    let largest = arr[i]

    for(let j=i;j<i+3;j++){
        if(arr[j] > largest){
            largest = arr[j]
        }
    }
    console.log(largest)
}

//remove duplicates from an array

//let arr = [10, 5, 10, 3, 12, 5, 7, 3, 30];

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] === arr[j]){
            for(let k=j;k<arr.length;k++){
                arr[k] = arr[k+1]
            }
            arr.length--
        }
    }
}

console.log(arr)

//remove all duplicates and show only values that occurs once

//let arr = [2, 5, 6, 2, 3, 5, 7, 8, 3];

for(let i=0;i<arr.length;i++){
    let count = 0
    for(let j=0;j<arr.length;j++){
        if(arr[i] === arr[j]){
            count++
        }
    }
    if(count > 1){
        let val = arr[i]
        for(let k=0;k<arr.length;k++){
            if(arr[k] === val){
                for(let m=k;m<arr.length-1;m++){
                    arr[m] = arr[m+1]
                }
                arr.length--
                k--
            }
        }
        i--
    }
}

console.log(arr)

//prime numbers

//let arr =[1,2,-3,4,5,6,7]

for(let i = 0; i < arr.length ; i++){
    if (arr[i] < 2){
        continue;
    }
    let isPrime = 0
    for(let j=2; j<=arr[i] / 2 ; j++){
        if(arr[i] % j === 0){
            isPrime = 1
        }
    }
    if(isPrime ===0){
        console.log(arr[i])
    }
}

///print duplicated values

//let arr = [1,2,5,3,5,4,8,2,5,6,1,7,8]

for(let i=0;i<arr.length;i++){
    if(arr[i] == -1) continue
    let duplicate = false
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] == arr[j]){
            duplicate = true
            arr[j] = -1
        }
    }
    if(duplicate){
        console.log(arr[i])
    }
}


//REMOVE UNIQUE FROM ARRAY

//let arr = [1,2,10,3,4,3,5,6,7,5,8,6,1,3]

for(let i=0;i<arr.length;i++){
    let count = 0
    for(let j=0;j<arr.length;j++){
       if(arr[i] == arr[j]){
           count++
       }
    }
    if(count < 2){
        for(let k=i;k<arr.length;k++){
            arr[k] = arr[k+1]
        }
        arr.length--
        i--
    }
}

console.log(arr)

////////////////////////

//Merge two array and remove duplicate

//let arr=[1,2,3,4]
let arr2=[4,5,6]

for(let i = 0 ; i < arr2.length ; i++){
    let isSame = false
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[i] === arr[j]){
            isSame = true
        }
    }
    if(!isSame){
        arr[arr.length] = arr2[i]
    }
}

console.log(arr)

////////////////////////////////

//Return true if the array is ascending otherwise false

//let arr  = [5,4,3,2]
let isAscending = true

for(i = 0 ; i < arr.length ; i++){
    if(arr[i] >= arr[i+1]){
        isAscending = false
    }
}

console.log(isAscending)




const person = {
  name: 'John',
  sayName: function () {
    console.log(this.name); // Refers to the 'person' object
  },
};

person.sayName(); // Outputs 'John'


// DEEP COPY ////


let array = [1,2,3,4]

let deep = JSON.parse(JSON.stringify(array))

deep[2]=10

console.log(deep)

console.log(array)

///////////////

//let array = [5,6,8,7,3,10]

// let smallest= array.reduce((min, num)=>{
//   if(num < min);
//   smallest = num;
// })  


console.log(smallest);



///let array = [5, 6, 8, 7, 3, 10];

let smallest = array.reduce((min, num) => {
  return num < min ? num : min;
}, array[0]); // Initialize with the first element of the array

console.log(smallest);


let round = Math.pow(5,2)

console.log(round)


let random = Math.random()

console.log(random)


// INSTANCE ////

function car( make, model){

  this.make = 1;
  this.model = 2;
}

let mycar = new car('toyota' , 'fortuner')

console.log(mycar instanceof car)



//////////////////////////



// 2 . print multiplication

// let arr = [1,2,3,4,5]
// let j = 0

// for(let i = 0 ; i < arr.length ; i++){
//     console.log(j += arr[i])
// }

///////////////////////////

// 3 flatten array
// let arr=[1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]]

// function flatten(arr){
//     let result = []
//     for(let i = 0 ; i< arr.length ; i++){
//         if(Array.isArray(arr[i])){
//             let flat = flatten(arr[i])
//             for(let j = 0 ; j< flat.length ; j++){
//                 result.push(flat[j])
//             }
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// console.log(flatten(arr))

////////////////////////////////////

// 4 . scope chaining 

// let b;
// console.log(b);              // undefined
// function B() {
//   let b;
//   console.log(b);           // undefined
//   function E() {
//     b = 6;
//     console.log(b);         // 6
//   }
//   b = 2;
//   E();
//   console.log(b);           // 6
// }

// b = 3;

// B();

///////////////////////

// 5 . nested functions

// function func1(a){
//     console.log(a)
//     return function func2(b){
//         console.log(b)
//         return function func3(c){
//             console.log(c)
//             return function func4(d){
//                 console.log(d)
//                 return a + b + c + d
//             }
//         }
//     }
// }


// console.log(func1(1)(2)(3)(4))

/////////////////////////////////

// 6 . this keyword working .call

// const Batman = {
//     name : "Batman",
//     message : function(){
//         return `I am ${this.name}, ${this.name === "Batman" ? "Guaerdian of the Gotham City" : "Why so Serious"}`
//     }
// }

// const Joker ={name : "Joker"}

// console.log(Batman.message())

////////////////////////////


// Promise.resolve(1)
//   .finally((data) => {
//     console.log(data);
//     return Promise.reject('error');
//   })
//   .catch((error) => {
//     console.log(error);
//     throw 'error2';
//   })
//   .finally((data) => {
//     console.log(data);
//     return Promise.resolve(2).then(console.log);
//   })
//   .then(console.log)
//   .catch(console.log);

// const promise1 = Promise.resolve(1);
// const promise2 = Promise.resolve(2);
// const promise3 = Promise.resolve(3);
// const promise4 = Promise.reject(4);

// const promiseAll = async () => {
//   const group1 = await Promise.all([promise1, promise2]);
//   const group2 = await Promise.all([promise3, promise4]);
//   return [group1, group2];
// };

// promiseAll().then(console.log).catch(console.log);

////////////////////////////////

// const users = [
// { firstName: "Alok", lastName: "Raj", age: 23 },
// { firstName: "Ashish", lastName: "Kumar", age: 29 },
// { firstName: "Ankit", lastName: "Roy", age: 29 },
// { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
// ];

// users.map((user)=> {
//     if(user.age < 30){
//         console.log(user.firstName)
//     }
// })

// let x = users.filter((user) => user.age < 30)
// x.map((n)=>{
//     console.log(n.firstName)
// })


////////////////////

//Return true if the array is ascending otherwise false

//let arr  = [5,4,3,2]
//let isAscending = true

for(i = 0 ; i < arr.length ; i++){
    if(arr[i] >= arr[i+1]){
        isAscending = false
    }
}

console.log(isAscending)


/////////////////////////

// OBJECT FILTERING

const data2 = [
  {
    id: 1,
    name: 'Alice',
    age: 28,
    email: 'alice@example.com',
    isActive: false,
  },
  { 
    id: 2,
    name: 'Bob', 
    age: 34, 
    email: 'bob@example.com', 
    isActive: true 
  },
  {
    id: 3,
    name: 'Charlie',
    age: 22,
    email: 'charlie@example.com',
    isActive: true,
  },
  {
    id: 4,
    name: 'Daisy',
    age: 45,
    email: 'daisy@example.com',
    isActive: false,
  },
  { id: 5, name: 'Ram', age: 24, email: 'ram@example.com', isActive: true },
];


let arr = []

for(let person of data2){
    if(person.age <= 30 && person.isActive){
        arr.push(person.email)
    }
}

console.log(arr)