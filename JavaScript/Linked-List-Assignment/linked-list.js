class LinkedList {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
        this.size = 0;
    }

    append(value) {
        
        let newNode = new Node(value);
        this.tail.nextNode = newNode;
        this.tail = newNode;
        this.size ++;
        if(this.head.nextNode === null) {
            this.head.nextNode = this.tail;
            this.head = this.head.nextNode;
        }
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
        this.size ++;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        let start = this.head
        while(index --) {
            start = start.nextNode;
        }
        return start.value;
    }

    pop() {
        let start = this.head;
        while(start.nextNode != this.tail) {
            start ++;
        }
        this.tail = start;
        start.nextNode = null;
        this.size --;
    }

    size() {
        return this.size;
    }

    find(val) {
        let start = this.head;
        let index = 0;
        while(start !== null && start.value != val) {
            // if()
            //     break;
            start = start.nextNode;
            index ++;
        }

        if(start != null) {
            return index;
        }
        return -1;
        // return start.value;    
    }

    toString() {
        let result = "";
        let start = this.head;
        while(start !== null) {
            result += (start.value + " -> ");
            start = start.nextNode;
        }
        result += "null";
        console.log(result);   
    }
}


class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

list = new LinkedList();
console.log("size = " + list.size);
list.append(13);
console.log("size = " + list.size);
list.append(14);
console.log(list.at(0));
console.log(list.at(1));
console.log(list.head);
console.log(list.tail);

list.prepend(12);


console.log("size = " + list.size);


console.log(list.toString());

console.log(list.find(11));
console.log(list.find(12));
console.log(list.find(13));
console.log(list.find(14));