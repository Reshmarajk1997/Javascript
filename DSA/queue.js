let arr = [];
let currentSize = arr.length;
let maxSize = 5;

function enqueue(newEle) {
  if (currentSize < maxSize) {
    arr[currentSize] = newEle;
    currentSize++;
  } else {
    console.log("Over Flow");
  }
}

function dequeue() {
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    currentSize--;
    arr.length = currentSize;
  } else {
    console.log("empty");
  }
}

function front(){
    if(!isEmpty()){
        console.log(' front ',arr[0]);
    }else{
        console.log('is empty');
    }
}

function rear(){
    if(!isEmpty()){
        console.log(' rear ',arr[currentSize-1]);
    }else{
        console.log('is empty');
    }
}

function isEmpty(){
    if(currentSize<=0){
        return true
    }else{
        return false
    }
}

enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
enqueue(50);
// enqueue(60)
// dequeue();
// dequeue();


// dequeue()
front()
rear()

console.log(arr);
