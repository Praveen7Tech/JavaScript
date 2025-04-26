 
// 1//

// let input =prompt("enter a char input");

// console.log("you entered  " + input);

// 2  ////


// let input1 =parseInt(prompt("enter a intiger value"));
// let input2=parseFloat(prompt("enter a float value"));

// let sum=parseFloat(input1+input2);

// console.log("sum :" + sum);


// 3 //

// let P = parseInt(prompt("principal amount "));
// let R = parseFloat(prompt("interest rate"));
// let N = parseFloat(prompt("number of years"));

// let SI = ((P*R*N)/100);

// console.log("simple interest :  " + SI);

// 4 ///

// let mark= parseFloat(prompt("emter your marks.."))

// const passMark=50;
// if(mark<0||mark>100){
//     console.log("invalid mark")
// }
// else if(mark >=passMark && mark <=100){
//     console.log("you are passed")

// }
// else {
//     console.log( "you are failed..")
// }

// 5 ////

// //let mark=parseFloat(prompt("emter your mark"));

// if(mark > 100 || mark < 0 ){
//     console.log("invalid mark...")
// }
// else if(mark >90){
//     console.log(" A GRADE.. congrats")
// }
// else if(mark >=80 && mark<=89){
//     console.log(" B GRADE.. congrats")
// }
// else if(mark >=70 && mark<=79){
//     console.log(" C GRADE.. congrats")
// }
// else if(mark >=60 && mark<=69){
//     console.log(" D GRADE.. congrats")
// }
// else if(mark >=50 && mark<=59){
//     console.log(" E GRADE.. congrats")
// }
// else if(mark <50){
//     console.log(" YOU ARE FAILED...")
// }

// 6 ///

// let number=parseInt(prompt("enter a number.."))

// switch (number) {
//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//             console.log("Monday")
//             break;   
//     case 3:
//              console.log("Tuesday")
//             break;  
//     case 4:
//         console.log("Wednesday")
//             break;
//     case 5:
//         console.log("Thursday")
//              break;  
//     case 6:
//         console.log("Friday")
//             break;
//     case 7:
//          console.log("Saturday")
//              break;   
//      default:
//         console.log("invalid number")
//              break;                                                
// }


// 7 //

// //let number = parseInt(prompt("enter number.."));

// for (let i = 1; i <= 10; i++) {
    
//     console.log(i +"x"+number +"="+ i*number);
    
// }

// 8 //

// let limit = prompt( "Enter limit of the array");

// //let sum =0;

// for (let index = 1; index <= limit; index++) {
    
//     if(index % 2 == 1){
//         sum += index;
//     }
// }

// console.log("sum of the odd number in the array : "+sum);

// 9 ///

// for (let i = 1; i <= 5; i++) {
    
//     let value = "";

//     for (let j = 1; j <= i; j++) {
//        value += j + " ";
       
//     }
//     console.log(value);
// }



//  10 // 

// //let limit=5;

// let arr1=[];
// for (let i = 0; i < limit; i++) {
//     let arrEle1 = prompt("enter array-1 elements")
//     arr1[i] = arrEle1;
   
// }
// console.log("array 1 : "+arr1[i]);


// let arr2=[];
// for (let i = 0; i < limit; i++) {
//     let arrEle2 = prompt("enter array-2 elements")
//     arr2[i] = arrEle2
    
// }
// console.log("array 2"+ arr2[i]);

// let temp=arr1;
//     arr1=arr2;
//     arr2=temp;

// //let limit=5;

// //let arr1=[];

// for(let i=0;i<limit;i++){
//    let element1 = prompt("enter array-1 values");
//     arr1[i] = element1;
// }

// console.log("array-1 "+ arr1);

// //let arr2=[];

// for(let i=0;i<limit;i++){
//     let element2 = prompt("enter array-2 elements");
//     arr2[i]=element2;
// }
// console.log("array-2 "+ arr2);

// //let temp=arr1
//     arr1=arr2
//     arr2=temp;

//     console.log("revised array after swap")
//     console.log("array-1 "+arr1)
//     console.log("array-2 "+arr2)

  
// 11 //

// //let arr=[]

// for(let i=0;i<10;i++){
//    let elements= prompt("enter array elements")
//    arr[i] = elements
// }

// console.log("array "+arr)
// let count=0

// for(let i=0;i<10;i++){
//     if(arr[i] %2 ==0){
//          count++;
//     }
// }

// console.log("even numbers count  "+count);


// 12 //


// //let arr=[]

// for(let i=0;i<5;i++){
//    let elements= prompt("enter array elements")
//    arr[i] = elements
// }

// console.log("array "+arr)

//  let newarr=arr.sort((a,b)=> b-a);

// console.log("sorted array  "+newarr);


// 13 //

// let string = prompt("enter a string: ");

// let arra = string.split('');

// let reversed = array.reverse()

// let joinArray = reversed.join('')

// if(string === joinArray){

//     console.log("the word is a palindrome");
//     }
//     else{

//         console.log("the word is not a palindrome");
//         }


// / 14 ///



// //let arr1=[];

// //let arr2=[];

// //let sum=[];

// //let limit =parseInt(prompt("Enter the limit "))
// for(let i=0 ; i<limit ; i++){

//     arr1[i]=[];

//     arr2[i]=[];

//     sum[i]=[];

//     for(let j=0 ; j<limit ; j++){

//         arr1[i][j]=parseInt(prompt("Array 1: "));

//         arr2[i][j]=parseInt(prompt("Array 2: "));

//         sum[i][j]=arr1[i][j]+arr2[i][j];
//     }
// }
// console.log("array -1")
// console.log(arr1)

// console.log("array -2")
// console.log(arr2)

// console.log("Sum of the array  ")

// for(let i=0 ; i<limit ; i++){

//     console.log(sum[i].join(" "));
// }

// 15 ///


// function getArray(arr, limit) {

//     for(let i = 0; i < limit; i++) {

//         let element = parseInt(prompt("Enter the element "));
//         arr[i] = element;
//     }
// }

// function displayArray(arr, limit) {

//     console.log("Array ");
//     for(let i = 0; i < limit; i++) {

//         console.log(arr[i]);
//     }
// }

// let arr = [];
// //let limit = 5;

// getArray(arr, limit);
// displayArray(arr, limit);

// / 16 ///

// let num=parseInt(prompt("Enter the number: "));

// let flag=0;
// for(let i=2 ; i<num ; i++){

//     if(num%i==0){

//         flag=1;
//         break;
//     }
// }

// console.log("entered number - "+num)

// if(flag==0){

//     console.log("It's a prime number");
// }
// else
//     {
//     console.log("It's not a prime number");
//     }

    