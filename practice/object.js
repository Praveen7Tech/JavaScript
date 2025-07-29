
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