

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

///////////////////////////////



// MERGING OBJECTS

let obj1 = { name: "Praveen", age : 25}
let obj2 = {namec : "Rohith" , agec : 28}

let merge = {...obj1,...obj2}
let merge2 = Object.assign({}, obj1, obj2)

obj1.age = 100

console.log(merge)
console.log(merge2)



// REMOVE NULL VALUES FROM OBJECT

const obj3 = {
  name: "John",
  age: null,
  city: "New York",
  email: null
};

let removeNull = Object.fromEntries(
    Object.entries(obj3).filter(([key,value])=> value !== null)
    )

console.log(removeNull)

///////////////

// group elements from object based on age


let arr = [
    {name:"felwin",age:12},
    {name:'praveen',age:27},
    {name:'alwin',age:27},
    {name:"rohith",age:30}
]

//let result = {}

for(let {name,age} of arr){
    if(result[age]){
        if(typeof result[age] === "string"){
            result[age] = [result[age] , name]
        }else{
            result[age].push(name)
        }
    }else{
        result[age] = name
    }
}

console.log(result)

//REDUCE METHOD
let result = arr.reduce((acc,curr)=>{
    if(acc[curr.age]){
        if(typeof acc[curr.age] === "string"){
            acc[curr.age] = [acc[curr.age], curr.name]
        }else{
            acc[curr.age].push(curr.name)
        }
    }else{
        acc[curr.age] = curr.name
    }
    return acc
},{})

console.log(result)

/////////////
// LARGER KEY IN OBJ

const myObject = {
  a: 10,
  b: 50,
  c: 20
};

const entries = Object.entries(myObject)

entries.sort(([,val1],[,val2])=> val2 - val1)

let larger = entries[0][0]

////////////////////////

// FUNCTION MEMOIZATION

// normal function
function square(n){
    return n * n
}
console.log(square(5)) // every time we use same input the function recompute again

/////

function Memoized(fn){
    const cache ={}
    
    return function(n){
        if(cache[n]){
            console.log("answer from memoized object")
            return cache[n]
        }

        const result = fn(n)
        cache[n] = result
        console.log("result computed")
        return result
    }
}

const MemoSquare = Memoized(function(n){
    return n * n
})

console.log(MemoSquare(5))
console.log(MemoSquare(5)) // same input it give the answer from memoized object


//////////////////////////////////////////


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

///////////////////////////////



// MERGING OBJECTS

let obj1 = { name: "Praveen", age : 25}
let obj2 = {namec : "Rohith" , agec : 28}

let merge = {...obj1,...obj2}
let merge2 = Object.assign({}, obj1, obj2)

obj1.age = 100

console.log(merge)
console.log(merge2)


// REMOVE NULL VALUES FROM OBJECT

const obj3 = {
  name: "John",
  age: null,
  city: "New York",
  email: null
};

let removeNull = Object.fromEntries(
    Object.entries(obj3).filter(([key,value])=> value !== null)
    )

console.log(removeNull)

///////////////

// group elements from object based on age


let arr = [
    {name:"felwin",age:12},
    {name:'praveen',age:27},
    {name:'alwin',age:27},
    {name:"rohith",age:30}
]

//let result = {}

for(let {name,age} of arr){
    if(result[age]){
        if(typeof result[age] === "string"){
            result[age] = [result[age] , name]
        }else{
            result[age].push(name)
        }
    }else{
        result[age] = name
    }
}

console.log(result)

//REDUCE METHOD
let result = arr.reduce((acc,curr)=>{
    if(acc[curr.age]){
        if(typeof acc[curr.age] === "string"){
            acc[curr.age] = [acc[curr.age], curr.name]
        }else{
            acc[curr.age].push(curr.name)
        }
    }else{
        acc[curr.age] = curr.name
    }
    return acc
},{})

console.log(result)

/////////////

