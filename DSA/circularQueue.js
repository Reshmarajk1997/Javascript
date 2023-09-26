class Queue {
  constructor(max) {
    this.size = max;
    this.item = new Array(this.size);
    this.currentSize = 0;
    this.rear = -1;
    this.front = -1;
  }

  enqueue(newEl) {
    if (this.currentSize != this.size) {
      if (this.rear === this.size - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }
      this.item[this.rear] = newEl;
      this.currentSize++;
      if (this.front == -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.currentSize != 0) {
      this.item[this.front] = null;
      if (this.front === this.size - 1) {
        this.front = 0;
      } else {
        this.front++;
      }
      this.currentSize--;
    } else {
      this.rear = -1;
      this.front = -1;
      console.log("array is empty");
    }
  }
  display() {
    console.log(this.item);
  }
}

let circularQueue = new Queue(5);
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
circularQueue.dequeue();
circularQueue.enqueue(60);
circularQueue.display();
