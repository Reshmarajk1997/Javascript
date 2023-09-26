
// let n = 1;
// function factorial(val){
//     if(val>1){
//        n = n * val;
//          val--
//          factorial(val)
//     }else if(val === 1 || val === 0){
//         console.log(n);
//     }
// }

function factorial(val){
    if(val!=0){
        return val * factorial(val-1);
    }
    return 1;
}
console.log(factorial(3));