
// // CREATE STACK USING QUEUE (2 QUEUE)

class StackUsingQue {
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }

    push(value){
        this.queue1.push(value)
    }

    pop(){
        while(this.queue1.length > 1){
            this.queue2.push(this.queue1.shift());
        }

        let popped = this.queue1.shift();
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return popped;
    }


    display(){
        console.log([...this.queue1])
    }
}

//const stack = new StackUsingQue()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.display()

console.log(stack.pop())
stack.display()

//////////////

// Stack implimentation using array

class Stack {
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length-1]
    }

    display(){
        console.log(this.stack)
    }
}

//const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.display()

console.log(stack.pop())
console.log(stack.peek())
stack.display()

