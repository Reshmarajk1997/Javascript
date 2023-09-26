

let arr = [64, 1, 12, 22, 11];

for (let i = 0; i < arr.length; i++) {
  let min = i;
//   console.log(arr[min]);
  for (let j = i+1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
    min = j
    // console.log(min);
    }
  }
  console.log(arr[i]);
     let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      
}
console.log(arr);