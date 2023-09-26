// let factorial = 5;
// let val = factorial;
// for(let i=1;i<val;i++){
//     factorial = factorial * (val-i);
// }
// console.log(factorial);


function factorial(val){
    let factorial = val 
    let n;
    if(val == 0){
        factorial = 1;
    }
    else{
        for(let i=1;i<val;i++){
        n = val-i;
        factorial = factorial * n;
    }
    }
    console.log(factorial);
}

factorial(5)