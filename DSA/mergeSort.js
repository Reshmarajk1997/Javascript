let arr =[8,20,-2,4,6,-1,55,3]

function splitArr(arr){
    if(arr.length<2){
        return arr
    }

    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);
    //console.log('left '+leftArr+' right '+rightArr);
    return mergeArr(splitArr(rightArr), splitArr(leftArr))
}

function mergeArr(leftArr,rightArr){
    let sortArr = [];
    while(leftArr.length && rightArr.length){
        console.log('left '+leftArr+' right '+rightArr);
        if(leftArr[0]<=rightArr[0]){
            sortArr.push(leftArr.shift())
        }else{
            sortArr.push(rightArr.shift())
        }
        console.log('sort '+sortArr);
    }
    return [...sortArr,...leftArr,...rightArr]
}

console.log(splitArr(arr));