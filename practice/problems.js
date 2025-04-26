 
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

let mark= parseFloat(prompt("emter your marks.."))

const passMark=50;
if(mark<0||mark>100){
    console.log("invalid mark")
}
else if(mark >=passMark && mark <=100){
    console.log("you are passed")

}
else {
    console.log( "you are failed..")
}

5 ////

//let mark=parseFloat(prompt("emter your mark"));

if(mark > 100 || mark < 0 ){
    console.log("invalid mark...")
}
else if(mark >90){
    console.log(" A GRADE.. congrats")
}
else if(mark >=80 && mark<=89){
    console.log(" B GRADE.. congrats")
}
else if(mark >=70 && mark<=79){
    console.log(" C GRADE.. congrats")
}
else if(mark >=60 && mark<=69){
    console.log(" D GRADE.. congrats")
}
else if(mark >=50 && mark<=59){
    console.log(" E GRADE.. congrats")
}
else if(mark <50){
    console.log(" YOU ARE FAILED...")
}

6 ///

let number=parseInt(prompt("enter a number.."))

switch (number) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
            console.log("Monday")
            break;   
    case 3:
             console.log("Tuesday")
            break;  
    case 4:
        console.log("Wednesday")
            break;
    case 5:
        console.log("Thursday")
             break;  
    case 6:
        console.log("Friday")
            break;
    case 7:
         console.log("Saturday")
             break;   
     default:
        console.log("invalid number")
             break;                                                
}


7 //

//let number = parseInt(prompt("enter number.."));

for (let i = 1; i <= 10; i++) {
    
    console.log(i +"x"+number +"="+ i*number);
    
}

8 //

let limit = prompt( "Enter limit of the array");

//let sum =0;

for (let index = 1; index <= limit; index++) {
    
    if(index % 2 == 1){
        sum += index;
    }
}

console.log("sum of the odd number in the array : "+sum);

9 ///

for (let i = 1; i <= 5; i++) {
    
    let value = "";

    for (let j = 1; j <= i; j++) {
       value += j + " ";
       
    }
    console.log(value);
}



 10 // 

//let limit=5;

let arr1=[];
for (let i = 0; i < limit; i++) {
    let arrEle1 = prompt("enter array-1 elements")
    arr1[i] = arrEle1;
   
}
console.log("array 1 : "+arr1[i]);


let arr2=[];
for (let i = 0; i < limit; i++) {
    let arrEle2 = prompt("enter array-2 elements")
    arr2[i] = arrEle2
    
}
console.log("array 2"+ arr2[i]);

let temp=arr1;
    arr1=arr2;
    arr2=temp;

//let limit=5;

//let arr1=[];

for(let i=0;i<limit;i++){
   let element1 = prompt("enter array-1 values");
    arr1[i] = element1;
}

console.log("array-1 "+ arr1);

//let arr2=[];

for(let i=0;i<limit;i++){
    let element2 = prompt("enter array-2 elements");
    arr2[i]=element2;
}
console.log("array-2 "+ arr2);

//let temp=arr1
    arr1=arr2
    arr2=temp;

    console.log("revised array after swap")
    console.log("array-1 "+arr1)
    console.log("array-2 "+arr2)