class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedlist{
    constructor(value){
        this.head = null;
        this.size = 0;
    }

    insertbtwn(value, index){
        var node = new Node(value);

        if(index < 0 || index > this.size){
            console.log("Invalid entry");
        }
        if(index === 0){
            node.next = this.head;
            this.head = node
        }else{
            let previous = this.head;
            for(let i=0;i<index-1;i++){      //Till i reach previous to the index, we update previous pointer
                previous = previous.next;
            }
            node.next = previous.next;
            previous.next = node;
        }
        this.size++;
    }


        //To remove node at a given index

    
    removeAt(index){
        
        if(index < 0 || index > this.size){
            console.log("Invalidd");
        }
        
        if(index === 0){
           
            let removenode = this.head; // variable to hold reference of deleting node
            this.head = this.head.next;
        }else{
            var previous = this.head;

            for(let i=0;i<index-1;i++){
                previous = previous.next;
            }
             var removenode = previous.next;
            previous.next = removenode.next;
        }
        this.size--;
        return removenode.value;
    }

    //Remove node with corresponding value which is given to remove

    removeValue(value){
        if(this.head.value === value){
            this.head = this.head.next;
        }else{
            var previous = this.head;
            while(previous.next && previous.next.value !== value ){
                previous = previous.next;
            }
            if(previous.next){
                let removenode = previous.next;
                previous.next = removenode.next;
            }
            this.size--;
            return value;
        }
        return null;

    }

    print(){
        let present = this.head;       //A temporary pointer to traverse through ll
        var store = " "                   //A variable to store node values in list
        while(present){                //To update temporary pointer 
            store += present.value + " " + "->" + " "  
            present = present.next   //pointer points to next node
        }
        console.log(strore);
    }
}

let dl = new linkedlist();
dl.insertbtwn(40, 0);
dl.print();

dl.insertbtwn(20, 1);
dl.print();

dl.insertbtwn(60, 2);
dl.print();

dl.insertbtwn(100, 3);
dl.print();

dl.removeAt(1);
dl.print();

dl.removeValue(100);
dl.print();


