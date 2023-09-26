let s = "{}";

function isValid(s) {

  let arr = [];
  let currentSize = arr.length;
  let balanced = true;
  let st = s.split("");
  for (let i = 0; i < st.length; i++) {
    if (st[i] === "(" || st[i] === "{" || st[i] === "[") {
      arr[currentSize] = st[i];
      currentSize++;
      balanced=false
      console.log(balanced);
    } else {
     
      let x = arr.pop();
      switch (st[i]) {
        case ")":
          if (x !== "(") 
          balanced = false;
          break;
        case "}":
          if (x !== "{") 
          balanced = false;
          break;
        case "]":
          if (x !== "[")
           balanced = false;
          break;
        default:
          balanced = true;
          console.log(balanced);
          break;
      }
    }
  }
  if (balanced) {
    console.log("yes");
    return true;
  } else {
    console.log("no");
    return false;
  }   
};
 

isValid(s);
