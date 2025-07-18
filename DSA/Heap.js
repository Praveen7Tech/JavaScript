
class MinHeap {
    constructor(){
        this.heap = []
    }

    // setting parent index
    parentIndex(i){
        return Math.floor((i - 1) / 2)
    }
    // setting child left index
    leftChildIndex(i){
        return 2 * i + 1
    }
    // setting child right index
    rightChildIndex(i){
        return 2 * i + 2
    }

    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    // re order the heap after insertion 
    heapifyUp(){
        let index = this.heap.length - 1
        while(index > 0){
            let parentIndex = this.parentIndex(index)
            if(this.heap[index] < this.heap[parentIndex]){
                this.swap(index, parentIndex)
                index = parentIndex
            }else{
                break;
            }
        }
    }

    // delete and return min value
    extractMin(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)

        return min
    }

    // re order after deletion min
    heapifyDown(index){
        let small = index
        let left = this.leftChildIndex(index)
        let right = this.rightChildIndex(index)

        if(left < this.heap.length && this.heap[left] < this.heap[small]){
            small = left
        }

        if(right < this.heap.length && this.heap[right] < this.heap[small]){
            small =  right
        }

        if(small !== index){
            this.swap(index, small)
            this.heapifyDown(small)
        }
    }

    display(){
        console.log(this.heap)
    }
}

const min = new MaxHeap()

min.insert(10)
min.insert(8)
min.insert(11)
min.insert(7)
min.insert(12)
min.insert(15)
min.insert(13)

min.display()

console.log(min.extractMin())
min.display()

//////////////////////////////


class MaxHeap {
    constructor() {
        this.heap = []
    }

    // Setting parent index
    parentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    // Setting child left index
    leftChildIndex(i) {
        return 2 * i + 1
    }

    // Setting child right index
    rightChildIndex(i) {
        return 2 * i + 2
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    // Insert value into the heap
    insert(value) {
        this.heap.push(value)
        this.heapifyUp()
    }

    // Reorder the heap after insertion
    heapifyUp() {
        let index = this.heap.length - 1
        while (index > 0) {
            let parentIndex = this.parentIndex(index)
            if (this.heap[index] > this.heap[parentIndex]) {
                this.swap(index, parentIndex)
                index = parentIndex
            } else {
                break
            }
        }
    }

    // Extract and return max value (root)
    extractMax() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)

        return max
    }

    // Reorder the heap after deletion of the max value
    heapifyDown(index) {
        let largest = index
        let left = this.leftChildIndex(index)
        let right = this.rightChildIndex(index)

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left
        }

        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right
        }

        if (largest !== index) {
            this.swap(index, largest)
            this.heapifyDown(largest)
        }
    }

    // Display the heap
    display() {
        console.log(this.heap)
    }
}

const max = new MaxHeap()

max.insert(10)
max.insert(8)
max.insert(11)
max.insert(7)
max.insert(12)
max.insert(15)
max.insert(13)

max.display()

console.log(max.extractMax())
max.display()
