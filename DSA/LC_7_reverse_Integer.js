let x = -99591;
let a = x,y,result=0;
if(a<0){
    a = 0-a;
}
while(a!=0){
    y = (a%10).toString();
    console.log('y ',y);
    result =result+y;
    a=a-y;
    console.log('- ',a);
    a = a/10;
    console.log('/ ',a);
}
result = result*1;
if(x<0){
    result = 0-result;
}
if(result<-2147483648 || result>=2147483647){
    result=0;
    console.log(result);
    // return 0;
}else{
    console.log(result);
    // return result;
}

