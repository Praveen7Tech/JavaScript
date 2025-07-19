
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    
    insert(value){
        const node = new Node(value)
        if(this.root == null){
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }
    
    insertNode(root, node){
        if(node.value < root.value){
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }
    
    preorder(root){
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }
    
    levelorder(root){
        let queue = [root]
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    
    Min(root){
        if(!root.left){
            return root.value
        }else{
            return this.Min(root.left)
        }
    }
    
    Max(root){
        if(!root.right){
            return root.value
        }else{
            return this.Max(root.right)
        }
    }
}

const bst = new BST()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(7)
bst.insert(12)
bst.insert(3)

bst.preorder(bst.root)
console.log("///////////")
bst.inorder(bst.root)
console.log("///////////")
bst.levelorder(bst.root)

console.log("///////////")
console.log(bst.Min(bst.root))
console.log(bst.Max(bst.root))











