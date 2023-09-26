let arr = [5,6,21,8,7,555,1,248,3,54,60,17]

function quickSort(arr){

    if(arr.length == 1){
        return arr;
    }
    let pivot = arr[arr.length-1];
    let leftArr = [], rightArr = [];
    for(let i=0;i<arr.length-1;i++){
        if(pivot>arr[i]){
            leftArr.push(arr[i])
        }
        else{
            rightArr.push(arr[i])
        }
    }
    if(leftArr.length>0 && rightArr.length>0){

        return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
    }else if(leftArr.length>0){
        return [...quickSort(leftArr),pivot]
    }else{
        return [pivot,...quickSort(rightArr)]
    }
}

console.log(quickSort(arr));
console.log(arr);