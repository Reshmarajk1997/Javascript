let arr = [1, 3, 5, 7, 7, 7, 9, 11, 11, 13, 15, 17];
let target = 7;
let pos = undefined;
let start = 0;
let end = arr.length - 1;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    while(arr[mid]===arr[mid-1]){
        mid = mid-1;
        continue;
    }
    pos = mid;
    break;
  } else if (arr[mid] < target) {
    mid = mid + 1;
    start = mid;
  } else if (arr[mid] > target) {
    mid = mid - 1;
    end = mid;
  }
}
console.log(pos);
