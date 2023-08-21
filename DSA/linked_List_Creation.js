class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  traversing(pos, val) {
    let counter = 0;
    console.log(this.size);
    let currentNode = this.head;
    while (counter < this.size) {
      if (counter < pos) {
        currentNode.value = val;
      }
      //console.log(currentNode);
      currentNode = currentNode.next;

      counter++;
    }
  }
  deleteNode(index) {
    let counter = 1;
    let leadNode = this.head;
    if (index == 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        leadNode = leadNode.next;
        counter++;
      }
      let nextNode = leadNode.next.next;
      leadNode.next = nextNode;
      // console.log(leadNode);
    }
  }

  insertNode(pos, val) {
    let count = 1;
    let leadNode = this.head;
    let insertNode = {
      value: val,
      next: null,
    };
    if (pos === 1) {
      insertNode.next = this.head;
      this.head = insertNode;
      console.log(this.head);
    } else {
      while (count < pos - 1) {
        leadNode = leadNode.next;
        count++;
      }
      insertNode.next = leadNode.next;
      leadNode.next = insertNode;
      console.log(leadNode.next);
    }
  }

  // based on element

  searchNodeElement(index){
    let count = 1;
    let node = this.head
    if(index === 1){
        
        console.log(node);

    }
    else{

        while(count<index){
            count++;
            node = node.next;
        }

        console.log(node);
    }

  }

  //based on value

  searchNodeValue(val){
    let count = 1;
    let node = this.head;   
        while(count<=this.size){           
            if(val === node.value){
                console.log(node);
                break;
            }
            node = node.next;
            count++;
        }
  }

  // search based on element 
  search(data){

    let result = undefined;

    let node = this.head;

    let loop = true;
    while(loop){

        if(loop && node.value === data){
            result = node;
            break;
            
        }
        node = node.next;
        loop = !! node

    }

    console.log(result);
  }
}

let list = new List(100);
list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);

list.traversing();

//list.deleteNode(3);

//list.insertNode(2, 4444);

//list.searchNodeElement(6);

//list.searchNodeValue(200);

//list.search(700);

//console.log(list);
