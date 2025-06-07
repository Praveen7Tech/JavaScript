/// Binary Search

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; 
    } else if (arr[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }

  return -1; 
}

let numbers = [10, 20, 30, 40, 50, 60, 70];
console.log(binarySearch(numbers, 50)); 
console.log(binarySearch(numbers, 25)); 

// recursive binary search

function recursiveBinary(arr, target){
    return search(arr,target,0, arr.length - 1)
}

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -11
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    
    if(target === arr[middleIndex]){
        return middleIndex
    }

    if(target < arr[middleIndex]){
        return search(arr,target,leftIndex,middleIndex - 1)
    }else{
        return search(arr,target,middleIndex + 1, rightIndex)
    }
}

console.log(recursiveBinary([1,2,3,4,5,6], 7))