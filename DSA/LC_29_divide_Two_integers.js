
var divide = function(dividend, divisor) {
    let quotient = 1,dividend_x = dividend, divisor_x = divisor
    if(dividend<0) dividend = 0-dividend
    if(divisor<0) divisor = 0-divisor
    let value = divisor
    while(true){
        if(value+value<dividend){
            // console.log("value if: ",value, " 0-dividend ", (0-dividend))
            value = value + value;
            quotient  =quotient + quotient;
        }
        else if((value+divisor)<=dividend) {
            // console.log("value: ",value)
            value = value + divisor;
            quotient=quotient + 1;
        }
        else if(dividend<divisor){
            quotient = 0;
            break;
        }
        else{
            break;
        }
    }
    if((dividend_x<0 && divisor_x<0)){}
    else if((dividend_x<0||divisor_x<0)){
        quotient = 0-quotient
    }
    if(quotient<-2147483648)quotient=-2147483648
    else if (quotient>2147483647)quotient=2147483647
    return quotient
};

console.log(divide(-2147483648,-1))