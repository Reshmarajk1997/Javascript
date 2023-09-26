const inputQueue = [1, 2, 3, 4, 5,6];

function dequeue(inputQueue) {
  let rear = inputQueue.length - 1;
  let front = 0;
  let temp;
  while (front < rear) {
    temp = inputQueue[front];
    inputQueue[front] = inputQueue[rear];
    inputQueue[rear] = temp;
    front++;
    rear--;
  }
}

dequeue(inputQueue);
console.log(inputQueue);
