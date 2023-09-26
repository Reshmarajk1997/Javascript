let arr = [];
let currentSize = arr.length;
let item =[];

function push(str){
    for(let i=0;i<str.length;i++){
        arr[currentSize] = str[i]
        currentSize += 1;
        arr.length = currentSize;
    }
}

function pop(){
    for(let i=0;i<arr.length;i++){
        item[i] = arr[currentSize-1]
        currentSize -=1
    }
}

let str = 'HELLO';

str = str.split('')
push(str)
pop()
item = item.join('')
console.log(item);



