
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