let arr = [1,2,3,4,5,6,7,8];

class Node{
    constructor(val){ 
        this.value = val;
        this.next = null;
        this.previous = null;
    }

}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    arrayConverter(arr){
        let i =0;
        while(i<arr.length)
        {
            let node = new Node(arr[i])
        if(!this.head){
            this.head = node;
            this.tail =node;
        }
        else{
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;

        }
        this.size++;
        i++;
    }
    }

}

let list = new DoublyLinkedList();
list.arrayConverter(arr)
console.log(list);

