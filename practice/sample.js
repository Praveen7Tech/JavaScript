

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