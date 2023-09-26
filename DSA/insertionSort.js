let arr = [12, 11, 13, 5, 6] ;
let i,j,temp; 
function insertionSort(arr){
    for (j = 1; j < arr.length ; j++) {
        for (i = j - 1; i >= 0; i--) {
          if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j = j-1;
          }
          else{
              break;
          }
        }
      }
}

insertionSort(arr)

console.log(arr);