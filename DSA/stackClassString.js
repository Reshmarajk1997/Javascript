class Stack {
  arr = [];
  currentSize;
  newStr;
  constructor(Str) {
    this.newStr = Str.split("");
    this.currentSize = this.arr.length;
  }
  push(newEle) {
    this.arr[this.currentSize] = newEle;
    this.currentSize = this.currentSize + 1;
  }
  pop() {
    if (this.arr.length >= 0) {
      let ele = this.arr[this.currentSize - 1];
      this.currentSize--;
      this.arr.length = this.currentSize;
      return ele;
    } else {
      console.log("arr is empty");
    }
  }
  reverseStr() {
    for (let i = 0; i < this.newStr.length; i++) {
      this.push(this.newStr[i]);
    }
    for (let i = 0; i < this.newStr.length; i++) {
      this.newStr[i] = this.pop();
    }
  }
  display() {
    this.newStr = this.newStr.join("");
    console.log(this.newStr);
  }
}
let hl = "hello";
let st1 = new Stack(hl);
st1.reverseStr();
st1.display();
