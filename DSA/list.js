

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

    //insert a value to a specific positiom
    insert(value, index){
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0; i< index-1;i++){
                prev = prev.next
            }
            node.next =prev.next;
            prev.next =node;
            this.size++
        }
    }

    //Remove a value fron specified index
    Remove(index){  
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0; i< index-1; i++){
                prev = prev.next
            }
            removeNode = prev.next;
            prev.next = removeNode.next
        }
        this.size--;
        return removeNode.value
    }

    // remove a matching value from linked list
    delete(value){
        if(value === this.head.value){
            this.head = this.head.next
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                let removeValue = prev.next
                prev.next = removeValue.next
            }
        }
        this.size--
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

list.deleteNthNode(9)
list.print()
console.log(list.searchValue(10))

console.log("insert ------------");

list.print()

list.insert(10, 0)
list.print()











