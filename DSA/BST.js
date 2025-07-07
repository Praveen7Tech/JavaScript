
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null       
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }
            else if(value < root.value){
                return this.search(root.left, value)
            }
            else{
                return this.search(root.right, value)
            }
        }
    }

    // MIN - VALUE (BST)
    Min(root){
        if(!root.left){
            return root.value
        }else{
            return this.Min(root.left)
        }
    }

    // MAX - VALUE (BST)
    Max(root){
        if(!root.right){
            return root.value
        }else{
            return this.Max(root.right)
        }
    }

    //DELETE NODE
    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(root === null){
            return null
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }

            root.value = this.Min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    // Height of BST 
    Height(root){
        if(root === null){
            return -1
        }

        const leftHeight = this.Height(root.left)
        const rightHeight = this.Height(root.right)

        return 1 + Math.max(leftHeight, rightHeight)
    }

    // Find Nth largest
    NthLargest(n){
        this.count = 0
        this.nthLargest = null
        this.FindNthLarge(this.root, n)
        return this.nthLargest
    }

    FindNthLarge(root, n){
        if(!root){
            return
        }
        this.FindNthLarge(root.right,n)
        this.count++

        if(this.count === n){
            this.nthLargest = root.value
        }
        this.FindNthLarge(root.left, n)
    }

    
    // Find Second largest
    SecondLargest(){
        if(!this.root || !this.root.left && !this.root.right){
            return null
        }

        let current = this.root
        while(current){
            if(current.right && !current.right.right && !current.right.left){
                return current.value
            }

            if(current.right && !current.right.right && current.right.left){
                return this.Max(current.right.left)
            }

            if(current.right){
                current = current.right
            }else{
                return this.Max(current.left)
            }
        }
    }


    // Validate Is Given Tree is BST

    isBST(node = this.root, min = -Infinity, max = Infinity){
        if(!node) return true

        if(node.value < min || node.value > max) return false

        return this.isBST(node.left, min, node.value)
            && this.isBST(node.right, node.value, max)
    }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,5))
console.log(bst.search(bst.root,154))

bst.preOrder(bst.root)
console.log("////////")
bst.inOrder(bst.root)
console.log("////////")
bst.postOrder(bst.root)

 bst.levelOrder()
console.log(bst.Min(bst.root))
console.log(bst.Max(bst.root))
console.log("//////////")
bst.delete(15)
bst.levelOrder()
console.log("//////////")

console.log(bst.Height(bst.root))

console.log("nth lage",bst.NthLargest(4))
console.log("second largest", bst.SecondLargest())

console.log("is BST-")
console.log(bst.isBST())

///////////////////////////////


