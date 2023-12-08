function repeatStringNumTimes(str, num) {
    
    if(num>0){
    //   for(let i=0;i<num;i++){
    //     st += str
    //   }
    str += str
    // console.log(str);
    return repeatStringNumTimes(str,num-1)
    }
    // else{
    //     st = ''
    // }
//    return str
  }
  
  let t = repeatStringNumTimes("abc", 3);
  console.log(t);