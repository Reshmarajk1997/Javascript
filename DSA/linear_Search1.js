let arr = [1,2,3,1,4,5,1,8,1,9,7,1]
let target = 10;
let count = 1;
let pos = [ ];
for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
        pos[count] = i
        count++;
        
        console.log('count '+count+ 'val '+pos[count]);
    }
}
console.log(pos);