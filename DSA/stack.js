// reverse stack using recursion

function reverse(stack){
    if(stack.length === 0 ) return

    let top = stack.pop()
    reverse(stack)
    insertBottom(stack,top)
}

function insertBottom(stack,item){
    if(stack.length === 0){
        stack.push(item)
        return
    }

    let top = stack.pop()
    insertBottom(stack,item)
    stack.push(top)
}

let stack = [1,2,3,4,5]
console.log(stack)

reverse(stack)
console.log(stack)