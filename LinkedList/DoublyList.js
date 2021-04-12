class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList{
    constructor(value){
        this.head = {
            value,
            next:null,
            prev:null,
        }
        this.tail = this.head
        this.length = 0
    }
    append(value){
        const newNode = new Node(value)

        this.tail.prev = newNode
        this.head.next = newNode;
        this.tail = newNode
        this.length ++

        return this
    }
}

const myDoubleList = new MyDoublyLinkedList(1)