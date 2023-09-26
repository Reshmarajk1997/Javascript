class Stack {
  arr = [];
  currentSize;
  maxSize;
  constructor(size) {
    this.maxSize = size;
    this.currentSize = this.arr.length;
  }
  push(newEle) {
    if (this.currentSize < this.maxSize) {
      this.arr[this.currentSize] = newEle;
      this.currentSize++;
    } else {
      console.log("Stack is full");
    }
  }
  pop() {
    if (this.arr.length > 0) {
      this.currentSize--;
      this.arr.length = this.currentSize;
    } else {
      console.log("arr is empty");
    }
  }
  display() {
    console.log(this.arr);
  }
}

let st1 = new Stack(5);
st1.push(10);
st1.push(10);
st1.push(10);
st1.push(40);
st1.pop();
st1.display();
