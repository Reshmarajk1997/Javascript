
function recur(i){
    console.log(i);
    if(i<20){
        recur(i+1)
    }
    console.log(i);
}
recur(10)
// for(let i=1;i<=20;i++){
//     console.log(i);
// }
// for( i=20;i>=1;i--){
//     console.log(i);
// }