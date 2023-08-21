class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  print() {
    let curr = this.tail;
    while (curr) {
      console.log(curr.value);
      curr = curr.previous;
    }
  }

  insertNode(pos, value) {
    let current = this.head;
    let count = 1;
    let newNode = new Node(value);
    // if(pos ===this.size+1){
    //     let  lastNode = this.tail;
    //     lastNode.next = newNode;
    //     newNode.previous = lastNode
    //     this.tail = lastNode;
    //     //this.tail.next = null
    // }

    if (pos === 1) {
      current.previous = newNode;
      newNode.next = current;
      this.head = newNode;
    } else {
      while (count < pos - 1 && count <= this.size) {
        count++;
        current = current.next;
      }
      let nextNode = current.next;
      nextNode.previous = newNode;
      newNode.next = current.next;
      newNode.previous = current;
      current.next = newNode;
    }
  }
  deleteDuplicate() {
    let current = this.head;

    while (current) {
      let nextNode = current.next;
      //console.log('next ',nextNode.value);
      while (nextNode && current.value === nextNode.value) {
        //console.log('inside next ',nextNode.value);
        nextNode = nextNode.next;
      }
      //console.log('next ',nextNode.value);
      if (!nextNode) {
        this.tail = current;
      } else {
        current.next = nextNode;
        nextNode.previous = current;
      }
      current = current.next;
    }
  }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(100);
doublyLinkedList.append(100);
doublyLinkedList.append(200);
doublyLinkedList.append(200);
doublyLinkedList.append(300);
doublyLinkedList.append(400);
doublyLinkedList.append(400);
doublyLinkedList.append(400);
doublyLinkedList.append(500);
doublyLinkedList.append(600);

//doublyLinkedList.insertNode(7, 800);
doublyLinkedList.deleteDuplicate();
console.log(doublyLinkedList);
doublyLinkedList.print();
