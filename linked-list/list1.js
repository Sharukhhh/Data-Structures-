class Node {
    constructor(value) {
        this.value = value;        //A node consist of value part which holds current value
        this.next = null;          //And reference part to the next node
    }
}


class List {
    constructor() {
        this.head = null;       //Indicates head of a list which is always at beginning
        this.length = 0;        //To track no of nodes in a list
    }

    // To add node to the beginning of a list
    preppendNode(value) {

        const newnode = new Node(value);        //Creating a node using node class

        if(!this.head) {
            this.head = newnode;
        } else {
            newnode.next = this.head;
            this.head = newnode;
        }
        this.length++;
    }

    // to add node at the end of the list
    appendNode(value) {
        const newnode = new Node(value);

        if(!this.head) {
            this.head = newnode;
        } else {
            let current = this.head;

            while(current.next) {
                current = current.next;
            }
            current.next = newnode;
        }
        this.length++;
    }

    // to add node inbetween at a given position in list
    addNodeInBetween(value , position) {
        const newnode = new Node(value);
        let current = this.head;

        for(let i = 1 ; i < position - 1 ; i++) {
            current = current.next;
        }
        newnode.next = current.next;
        current.next = newnode;
    }


    //Converting list to an array
    listToArray() {
        const array  = [];
        let current = this.head;

        while(current) {
            array.push(current.value);
            current = current.next;
        }

        return array;
    }

    // To find middle node in a list
    FindMiddleValueInList() {
        let pointer1  = this.head;
        let pointer2  = this.head;

        while(pointer2 && pointer2.next) {
            pointer1 = pointer1.next;
            pointer2 = pointer2.next.next;
        }

        return pointer1.value;
    }


    // reverse the existing list
    reverseList() {
        let current = this.head;
        let previous = null;
        
        while(current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;

        return this.displayList();
    }

    //To Display list 
    displayList() {
        let result = '';

        let current = this.head;

        while(current) {
            result += current.value  + '=>' + ' ';
            current = current.next;
        }

        return result +  'NULL';
    }
}


const linkedList = new List();

linkedList.preppendNode(22);
linkedList.preppendNode(10);
linkedList.preppendNode(40);
linkedList.appendNode(30);
linkedList.appendNode(1);
linkedList.addNodeInBetween(100 , 2);

console.log(linkedList.displayList());
console.log(linkedList.listToArray())
console.log(linkedList.FindMiddleValueInList());
console.log(linkedList.reverseList())
