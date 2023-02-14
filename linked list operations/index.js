class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LList{
    constructor(value){
        this.head = null;
        this.length = 0;
    }


    //insert node to the beginning of the list
    addFirst(value){
        var nnode = new Node(value);
        if(this.head == null){
            this.head = nnode;
        }else{
            nnode.next = this.head;
            this.head = nnode;
        }
        this.length++;
    }


    //insert node to the end of the list
    addLast(value){
        var nnode = new Node(value);
        if(this.head == null){
            this.head = nnode;
        }else{
            var current=this.head;
            while(current.next){
                current = current.next;
            }
            current.next = nnode;
            this.length++;
        }
    }


    //insert node inbetween at a given position
    addInBtw(value, index){
        var nnode = new Node(value);
        if(index < 0 || index > this.length){
            console.log("Invalid value");
        }if(index == 0){
            nnode.next = this.head;
            this.node = nnode;
        }else {
            var previous = this.head;
            for(var i=0;i<index-1;i++){
                previous = previous.next;
            }
            nnode.next = previous.next;
            previous.next = nnode;
        }
        this.length++;
    }


    //to reverse a list
    reverse(){
        var previous = null;
        var current = this.head;
        while(current){
            var storenext = current.next;
            current.next = previous;
            previous = current;
            current = storenext;
        }
        this.head = previous;
    }


    //to traverse the list
    printALL(){
        var current = this.head;
        var store = " "
        while(current){
            store += current.value + "->" + " "
            current = current.next;
        }
        console.log(store + "NULL");
    }


    //to convert an array to list
    arraytoList(arr,n){
        for(var i=0;i<n;i++){
            var value = arr[i];
            this.addLast(value);
        }
    }

}

var lis = new LList();


var arr = [2,3,4,5,6]

lis.arraytoList(arr,5);

lis.addLast(2);
lis.addLast(3);
lis.addLast(4);
lis.printALL();

console.log("Add at beginning");
lis.addFirst(2);
lis.addFirst(9);
lis.addFirst(0);
lis.printALL();

console.log("Add at last");
lis.addLast(12);
lis.addLast(4);
lis.addLast(10);
lis.printALL();

lis.reverse();
lis.printALL();

lis.addInBtw(21, 0);
lis.printALL();
lis.addInBtw(12, 1);
lis.printALL();
lis.addInBtw(32,2);
lis.printALL();
lis.addInBtw(90, 3);
lis.printALL();
lis.addInBtw(22,1);
lis.printALL();
     
