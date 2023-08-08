
var isPalindrome = function(x) {
    let sum=0;
    if(x==0)return true;
    while(x>0 ){       
        sum = sum*10+x%10;
        if(sum == 0) break;   
        console.log('sum ',sum); 
        console.log('x',x); 
        if(x==sum || x<sum ) break;
        x=Math.floor(x/10);
        if(x==sum ) break; 
    }
    if(x==sum)return true;
    return false;
}
let x = 12345641
console.log(isPalindrome(x));

