//using 3 while loop

for(let i = 1;i<5;i++){
    for(let a = 5;a>i;a--){
        process.stdout.write(' ')
    }
    for(let j = 1; j<=i; j++){
        process.stdout.write(j.toString())
    }
    console.log('');
}

//using 2 while loop

let i = 1;
a = 5
while(a > i) {
  process.stdout.write(" ");
  a--;
  if(a==i){
    let j=1;
    while(j<=i){
        process.stdout.write(j.toString())
        j++;
    }
    console.log('');
    i++;
    a = 5;
  }
}


