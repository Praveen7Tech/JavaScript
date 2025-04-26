

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