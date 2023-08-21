let arr = [1, 2,2,3,4,4,5];
class List {
  constructor(arr) {
    this.head = {
      value: arr[0],
      next: null,
    };

    this.size = 1;
    this.tail = this.head;
    let i = 1;
    while (i < arr.length) {
      this.size++;
      let newNode = {
        value: arr[i],
        next: null,
      };
      i++;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  addNodeHead(data) {
    let insertNode = {
      value: data,
      next: this.head,
    };
    this.head = insertNode;
    console.log(this.head);
  }
  addNodeTail(data){
    let insertNode = {
        value:data,
        next:null
    }
    this.tail = insertNode;
    console.log(this.tail);
  }

  elementsByOrder(){
   let currentNode = this.head;
   let count = 0;
    while(count<this.size){
        let val = currentNode.value;
        console.log(val);
        currentNode = currentNode.next;
        count++;
    }

  }
  elementsByReverseOrder(){
    let previous = null;
    let current = this.head;
    while(current){
      let next = current.next;
      current.next = previous;
      previous = current;
      current =next;
    }
    this.head = previous;

  }
  // removeDuplicate(){
  //   let current = this.head;
  //   let nextNode = current.next;
  //   while(current&&nextNode){
  //     console.log( 'current ',current.value);
  //     console.log('next ',nextNode.value);
  //     while(nextNode && current.value === nextNode.value){
  //       current = nextNode;
  //       nextNode = current.next;
  //     }
  //     current =current.next
  //   }
  // }

  removeDuplicate() {
    let current = this.head;
    while (current) {
      let nextNode = current.next;
      while (nextNode && current.value === nextNode.value) {
        nextNode = nextNode.next; // Skip duplicate nodes
      }
      current.next = nextNode; // Update the next pointer to skip duplicates
      current = current.next; // Move to the next distinct node
    }
  }
  

  print(){
    let curr = this.head;
    while(curr){
      console.log(curr.value);
      curr =curr.next;

    }
  }
}

let list = new List(arr);
//list.addNodeHead(111)
//list.addNodeTail(999)
//list.elementsByOrder();
// list.elementsByReverseOrder();
list.removeDuplicate();
list.print()
 console.log(list);

