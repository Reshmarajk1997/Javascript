function zero(){
    return 1;
}
function one(){
    return 1*zero();
}
function two(){
    return 2 * one();
}
function three(){
    return 3 * two();
}

// console.log(three()*two()*one()*zero());
// console.log(two());
// console.log(one());
// console.log(zero());
console.log(three());