function recur(val){
    if(val<=5){
        process.stdout.write(val.toString());
        recur(val+1)
    }
    else{
        // val--;
        console.log('');
    }
    if(val<=5)
   { process.stdout.write(val.toString());}

}

recur(1)