var divide = function(dividend, divisor) {
    let divi = divisor,num = dividend,d = divisor,num1=dividend
    let count = 1;
    if(divisor  < 0 ){
        divisor = 0-divisor
        d = divisor
    }
    if(dividend  < 0 ){
        dividend = 0-dividend
        num = dividend
    }
    // console.log('num1 ',num1);
    // console.log('num ',num);
    // console.log('divisor ',divisor);
    
    while(dividend>=0 ){
        if(num1 == 0 || d == 0 || num1<d){
            return count = 0;
        }
        if(dividend==d){
            // if(divi < 0 || num < 0){
            //     return count = 1;
            // }
            break;
        }
        count++;
        dividend = dividend-divisor;
         d = d+divisor
        //  console.log('d ',d);
        if(d+d>num1){
            if(divi<0){
                count =( count+count)-2;
            // console.log(count);
            break;
            }
            count = (count+count)-1;
            // console.log(count);
            break;
        }
        if(d+d==num1){
            // count = count+count;
            // console.log(count);
            break;
        }
        
        //  console.log('dividend ',dividend);
        // console.log('divisor ',divisor);
        //  console.log('count ',count);
    }
   
    if(divi < 0 || num1 < 0){
        count = -count
    }
    if(divi < 0 && num1 < 0){
        count = 0-count
    }
    console.log('count ',count);
    
};
console.log(divide(-10,10))