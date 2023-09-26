let a = 0;
let b = 1;
console.log(a);
let c;
while(b<=100){
    console.log(b);
    c = b;
    b = a+b;
    a = c;
    
}