let arr = [1, 4, 5, 20, 25, 40, 54, 62, 80];
let start = 0;
let end = arr.length - 1;
let target = 25;
let pos = undefined;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    pos = mid;
    break;
  } else if (arr[mid] < target) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(pos);
