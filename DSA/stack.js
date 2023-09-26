let arr = [];
let currentSize = arr.length;
let max = 5;

function push(newVal) {
  if (currentSize < max) {
    arr[currentSize] = newVal;
    currentSize = currentSize + 1;
  } else {
    console.log("over " + newVal);
  }
}

function pop() {
  if (currentSize > 0) {
    currentSize = currentSize - 1;
    arr.length = currentSize;
  }
}

push(10);
push(3);
push(20);
push(30);

pop();

console.log(arr);
