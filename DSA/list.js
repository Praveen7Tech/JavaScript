

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    isSize(){
        return this.size
    }

    // (prepend) - add a new node to begining
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size++
    }

    //(append) - add a new node to the end as null
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            let previous = this.head;
            while(previous.next){
                previous = previous.next
            }
            previous.next = node
        }
        this.size++
    }   

   

    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.head
            let values = ""
            while(curr){
                values += `${curr.value },`
                curr = curr.next
            }
            console.log(values)
        }
    }
}

const list = new LinkedList()



list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()








