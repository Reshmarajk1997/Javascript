let arr = [25,3,0,145,8,9,10]
let target = 100
let pos = undefined;
for(let i =0;i<arr.length;i++){
    if(target === arr[i]){
        pos = i;
    }
}
console.log(pos);
