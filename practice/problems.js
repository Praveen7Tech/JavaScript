 
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


//     17 //


//     class Calculator{
//         addition(a,b)
//         {
//             return a+b;
//         }
//         subtraction(a,b)
//         {
//             return a-b;
//         }
//         multiplication(a,b)
//         {
//             return a*b;
//         }
//         division(a,b)
//         {
//             if(b===0)
//             {
//                 return "Division by zero is not allowed.";
//             }
//             return a/b;
//         }
//     }
    
    
//     function main(){
        
//         let calc=new Calculator();
//         let choice=prompt("Choose an Option\n 1.Addition\n 2.subtraction\n 3.multiplication\n 4.division\n Enter your choice:");
    
//         let num1=parseInt(prompt("Enter number 1: "));
//         let num2=parseInt(prompt("Enter number 2: "));
//         let result;
    
//         switch(choice){
//             case '1':
//                 result = calc.addition(num1,num2);
//                 console.log("result:" + result);
//                 break;
//             case '2':
//                 result =calc.subtraction(num1,num2);
//                 console.log("result:"+result);
//                 break;
//             case '3':
//                result =calc.multiplication(num1,num2);
//               console.log("result:"+result);
//               break;
//             case '4':
//                 result =calc.division(num1,num2);
//                 console.log("result:"+result);
//              break; 
    
//             default:
//                     console.log("Invalid choice.");
//         }
//     }
    
//     main();
    
    
//     / 18 ///
    
//     let wt=parseFloat(prompt("Enter written text mark: "));
    
//     let lb=parseFloat(prompt("Enter Lab exams  mark: "));
    
//     let assign=parseFloat(prompt("Enter Assignments  mark: "));
    
//     let grade=wt*0.7+lb*0.2+assign*0.1;
    
//     console.log("written text -"+wt)
//     console.log("lab exam -"+lb)
//     console.log("assighments -"+assign)
    
//     console.log("The Grade of the student: "+grade);
    
//     / 19 //
    
//     let income=parseFloat(prompt("Enter your annual income: "));
//     let tax=0;
    
//     if(income<=250000){
    
//         tax=0;
//     }
    
//     else if(income<=500000){
    
//         tax=income*0.05;
//     }
    
//     else if(income<=1000000){
    
//         tax =Income* 0.20;
//     }
    
//     else
//         {
//            tax = Income * 0.30;
//         }
    
//     console.log("Anuual income - "+income)
    
//     console.log("Income tax amount: "+tax);
    
    
//     20 //
    
//     let num=1;
//     for(let i=1;i<=4;i++){
    
//         let row=""
//         for(let j=1;j<=i;j++){
    
//             row+=num+" "
//             num++;
//         }
    
//         console.log(row);
//     }
    
//     / 21 ///
    
//       let arr=[];
//       let newarr=[];
//       let limit=parseInt(prompt("Enter a limit: "));
      
//       let element=parseInt(prompt("enter the elements "));
//       for(var i=1;i<=limit;i++){
    
//           let element=parseInt(prompt())
//           arr.push(element);
//       }
    
//       for(var i=0;i<limit-1;i++){
    
//           newarr.push(arr[i]*arr[i+1]);
//       }
    
      
//       console.log(newarr)    
    
// function main(){

//     let limit=parseInt(prompt("Enter the limit: "))
//     let array1=getarray(limit)
//     let array2=getarray(limit)
//     let sumOf=sum(array1,array2,limit)
//     display(sumOf,limit)
// }

// function getarray(limit){

//     var arr=[]
//     // console.log("Enter the array elements: ")
    
//     for(var i=0;i<limit;i++)
//     {
//         arr[i]=[]
//         for(var j=0;j<limit;j++)
//         {

//             arr[i][j]=parseInt(prompt("enter array elements "))
//         }
//     }
//     return arr;
// }

// function sum(array1,array2,limit){

//     sumOf=[]
//     for(var i=0;i<limit;i++){

//         sumOf[i]=[]
//         for(var j=0;j<limit;j++)
//         {
//             sumOf[i][j]=array1[i][j]+array2[i][j]
//         }
//     }

//     return sumOf;
// }

// function display(sumOf,limit){

//    for(var i=0;i<limit;i++) {

//        console.log(sumOf[i])
//    }
// }

// main()


// 23 //

// function main() {
//     let arr1 = [];
//     let size = getArray(arr1);
//     displayArray(arr1, size);
// }

// function getArray(arr1) {
//     let size = parseInt(prompt("Enter the size of the array: "));

//     for (let i = 0; i < size; i++) {

//         arr1[i] = [];
//         for (let j = 0; j < size; j++) {

//             arr1[i][j] = parseInt(prompt(`Enter element for index ${i} ${j}: `));
            
//         }
//     }
//     return size;
// }

// function displayArray(arr1, size) {
//     console.log("Array elements are:");
//     for (let i = 0; i < size; i++) {

//         let row = "";
//         for (let j = 0; j < size; j++) {

//             row += arr1[i][j] + " ";
//         }
//         console.log(row);
//     }
// }


// main();


/// 24 ///

// class Area
// {
//     circle(){

//         let r=parseInt(prompt("Enter the radius of circle:"));
//         let area=3.14*r*r;
//         console.log("Area of circle is:"+area);
//     }

//      square(){

//         let r=parseInt(prompt("Enter the length of square:"));
//         let area=r*r;
//         console.log("Area of square is:"+area);
//     }

//      rectangle(){

//         let l=parseInt(prompt("Enter the length of rectangle:"));
//          let b=parseInt(prompt("Enter the width of rectangle:"));
//         let area=l*b;
//         console.log("Area of rectangle is:"+area);
//     }

//      triangle(){

//         let h=parseInt(prompt("Enter the height of triangle:"));
//          let b=parseInt(prompt("Enter the width of triangle:"));
//         let area=0.5*b*h;
//         console.log("Area of triangle is:"+area);
//     }
// }

// class myClass extends Area{

//     main(){

//         let choice=parseInt(prompt("Enter your choice:\n1.Circle\n2.Square\n3.Rectangle\n4.Triangle:\n"));
//         switch(choice){

//             case 1:this.circle();
//             break;
//             case 2:this.square();
//             break;
//             case 3:this.rectangle();
//             break;
//             case 4:this.triangle();
//             break;
//             default:
//             console.log("Wrong Choice!");
//             break
//         }    
//     }
// }

// let obj=new myClass();

// obj.main();


// 25 ///

// var library = [ {

//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ];

// library.forEach((item)=>{

//     if(item.readingStatus == true){
//         console.log("You have readed it");
//     }
//     else{
//         console.log("You haven't read it")
//     }
// })
