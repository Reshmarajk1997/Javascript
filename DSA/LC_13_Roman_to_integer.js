var romanToInt = function(s) {
    let sum = 0,a=0,b=0;
    const val = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
        for(let i=0;i<s.length;i++){
            console.log('s[i]',s[i]);
            b=a;
            for(const unit in val){
                console.log('unit val ',unit);
            if(s[i] === unit ){
                    a = val[unit]
                    console.log('a ',a,'b ',b);
                    if(a>b ){
                        
                        console.log('a-b ',a-b);
                        sum = sum+(a-b)-b
                        console.log('first ',sum);
                        
                    }else{
                        sum = sum+val[unit]
                        console.log('second ',sum);
                    }
                    
                 break;
            }
        }
        
    }
    console.log(sum);
};

romanToInt('LVIII')