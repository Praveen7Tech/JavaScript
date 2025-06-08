
//move all values to beginning of the array

let //arr =[2,0,1,0,3,0,4,5,0]
//let count = arr.length-1

for(let i=arr.length-1;i>=0;i--){
    if(arr[i] !== 0){
        let temp = arr[i]
        arr[i] = arr[count]
        arr[count] = temp
        count--
    }
}

console.log(arr)

//move all zeros to end of the array

let count = 0

for(let i=0;i<arr.length;i++){
    if(arr[i] !== 0){
        let temp  = arr[i]
        arr[i] = arr[count]
        arr[count] = temp
        count++
    }
}

console.log(arr)

//reverse the array

let start = 0
let end = arr.length-1

while(start < end){
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

    start++
    end--
}

console.log(arr)

//let arr = [10, 55, 150, 3, 12, 20, 76, 2, 30];

for(let i=0;i<arr.length;i+=3){
    let largest = arr[i]

    for(let j=i;j<i+3;j++){
        if(arr[j] > largest){
            largest = arr[j]
        }
    }
    console.log(largest)
}

