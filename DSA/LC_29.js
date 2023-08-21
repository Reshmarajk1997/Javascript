var divide = function(dividend, divisor) {
    let divi = divisor,num = dividend,d = divisor,num1=dividend
    let count = 0,sum = 0
    if(divisor  < 0 ){
        divisor = 0-divisor
        d = divisor
    }
    if(dividend  < 0 ){
        dividend = 0-dividend
        num = dividend
    }
    console.log(d);
    
    while(sum>=num){
        console.log(d);
        count++;
        console.log('count ',count);
        console.log('sum ',sum);
        sum = sum+d;
        console.log('after sum ',sum);
    }
    
};
console.log(divide(100,10))