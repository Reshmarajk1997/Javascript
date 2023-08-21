let say = "hello";
let newsy = "";
console.log(say.length)
for(let i=0;i<say.length;i++){
    for(let j=97;j<=122;j++){
        if(say[i]===String.fromCharCode(j)){
            // console.log(say[i]);
            // console.log(String.fromCharCode(j+2));
             newsy += String.fromCharCode(j+2);
        }
    }
}
 console.log(newsy);
