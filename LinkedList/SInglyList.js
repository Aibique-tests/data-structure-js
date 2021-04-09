// 1 --> 2 --> 3 --> 4

// One node point to the next node, from head to tail. 
// All nodes are randomly spread in the memory not like arrays

class Node {
    constructor(value){
        this.value = value
        this.next= null
    }
}

class MySinglyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value){
        const newNode = new Node(value);

        this.tail.next = newNode
        this.tail = newNode
        this.length ++;

        return this

    }
    prepend(value){
        const newNode = new Node(value)

        newNode.next = this.head;
        this.head = newNode
        this.length ++

        return this
    }
    insert(index, value){
        //validate if index is out of range
        if(index >= this.length){
            return this.append(value)
        }
        // Node
        const newNode = new Node(value)
        // Previous Node
        const previousNode = this.getIndexNode(index - 1)
        // Holding Node
        const holdingNode = previousNode.next

        //Now make the exchange
        previousNode.next = newNode;
        newNode.next = holdingNode
        this.length ++;

        return this
    }
    getIndexNode(previousIndex){
        // reducer
        let current = 0;
        let currentNode = this.head;
        
        do {
            currentNode = currentNode.next;
            current ++;

            return currentNode
        } while (current < previousIndex);
    }
    erase(value){
        let currentNode = this.head
        let currentIndex = 0;
        while (value !== currentNode.value) {
            currentNode = currentNode.next;
            currentIndex++;

        }
        //get previous Node
        const PreviousNode = this.getIndexNode(currentIndex - 1)
        //get next Node
        const HoldingNode = currentNode.next;

        // make the changes 
        currentNode= undefined
        PreviousNode.next = HoldingNode;
        this.length --
        
        return this
    }
}

const mySingly = new MySinglyLinkedList(1)
