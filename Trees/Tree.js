class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let rootPointer = this.root;

        while(true){
            if(value < rootPointer.value){
                if(!rootPointer.left){
                    rootPointer.left = newNode;
                    return this;
                }
                    rootPointer = rootPointer.left;
            }
            else{
                if(!rootPointer.right){
                    rootPointer.right = newNode;
                    return this;
                }
                    rootPointer = rootPointer.right
            }
        }
    }
}

const myTree = new BinarySearchTree();
myTree.insert(10)
myTree.insert(4)
myTree.insert(20)
myTree.insert(2)