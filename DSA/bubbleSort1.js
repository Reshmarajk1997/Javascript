// let arr = [0,1, 4, 2, 5, -2, 3,-1 ]
// let arr = [9,8,7,6,5,4,-3,2,1,0]
let arr = [0,1,2,3,4,5,6,7,8,9]
let k=0;
let swap = false;
function bubble(arr){
  let  l = arr.length-1;
//   let i = 0;
//     while(i<l-1){
//     if(arr[i] > arr[i+1]){
//         arr[i] = arr[i]+arr[i+1];
//         arr[i+1] = arr[i]-arr[i+1];
//         arr[i] = arr[i]-arr[i+1]
//     }
//     i++;
//     if(i === l-1){
//         l = l - 1
//         i = 0;
//     }
// }
    for(let i=0;i<l;i++){
        for(let j=0;j<l-i;j++){
            if(arr[j] > arr[j+1]){
                swap = true;
                arr[j] = arr[j]+arr[j+1];
                arr[j+1] = arr[j]-arr[j+1];
                arr[j] = arr[j]-arr[j+1]
            }
            k++;
            console.log(k);
        }
        if(swap === false){
            break;
        }
        swap === false;
    }
    

return arr
}

console.log(bubble(arr))

