 
 class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value);

        if(this.length === 0){
            
            this.bottom = newNode;
            this.top = newNode;
        }
        else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length ++;
        return this;
    }
    pop(){
        if(this.length === 0){
            return 'No data'
        }
        if(this.length === 1){
            this.top = this.top.next
            this.bottom = this.bottom.next

            return this;
        }
        const holdingPointer = this.top.next;

        this.top = null;
        this.top = holdingPointer;

        this.length --
        return this
    }
}

myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.pop()
myStack.pop()
myStack.pop()