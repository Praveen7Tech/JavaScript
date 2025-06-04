// 1. concate two array and remove duplicate

// let arr1=[1,2,3];
// let arr2=[3,4,5]

// let ans = []

// for(let i = 0 ; i < arr1.length ; i++){
//     ans[ans.length] = arr1[i]
// }

// for(let j = 0 ; j < arr2.length ; j++){
//     ans[ans.length] = arr2[j]
// }

// for(let i = 0 ; i < ans.length ; i++){
//     let flag = true
//     for(let j = i+1 ; j < ans.length ; j++){
//         if(ans[i] == ans[j]){
//             flag = false
//         }
//     }
//     if(flag){
//         console.log(ans[i])
//     }
// }

///////////////////////

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

function func1(a){
    console.log(a)
    return function func2(b){
        console.log(b)
        return function func3(c){
            console.log(c)
            return function func4(d){
                console.log(d)
                return a + b + c + d
            }
        }
    }
}


console.log(func1(1)(2)(3)(4))

/////////////////////////////////

// 6 . this keyword working .call

const Batman = {
    name : "Batman",
    message : function(){
        return `I am ${this.name}, ${this.name === "Batman" ? "Guaerdian of the Gotham City" : "Why so Serious"}`
    }
}

const Joker ={name : "Joker"}

console.log(Batman.message())

////////////////////////////


Promise.resolve(1)
  .finally((data) => {
    console.log(data);
    return Promise.reject('error');
  })
  .catch((error) => {
    console.log(error);
    throw 'error2';
  })
  .finally((data) => {
    console.log(data);
    return Promise.resolve(2).then(console.log);
  })
  .then(console.log)
  .catch(console.log);

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

const users = [
{ firstName: "Alok", lastName: "Raj", age: 23 },
{ firstName: "Ashish", lastName: "Kumar", age: 29 },
{ firstName: "Ankit", lastName: "Roy", age: 29 },
{ firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

users.map((user)=> {
    if(user.age < 30){
        console.log(user.firstName)
    }
})

let x = users.filter((user) => user.age < 30)
x.map((n)=>{
    console.log(n.firstName)
})