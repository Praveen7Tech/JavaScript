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

