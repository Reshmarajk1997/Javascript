function rangeOfNumbers(startNum, endNum) {
  if(startNum>endNum){
    return [];
  }
  else{
    const array = rangeOfNumbers(startNum,endNum-1);
    array.push(endNum);
    return array;
  }
};
let a = rangeOfNumbers(1, 5);
console.log(a);
