let a = 0;
console.log(a);
function fabinocci(b){
    if(b<=100){
        console.log(b);
        b = a+b;
        a=b-a;
        fabinocci(b)
    }

}

fabinocci(1);