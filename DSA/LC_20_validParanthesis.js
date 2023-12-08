let s='{}[]'

var isValid = function(s) {
    let arr = [];
    let currentSize = arr.length;
    let balanced = true;
    let st = s.split("");
    for (let i = 0; i < st.length; i++) {
      if (st[i] === "(" || st[i] === "{" || st[i] === "[") {
        arr[currentSize] = st[i];
        // console.log(i);
        console.log( currentSize);
        // console.log(arr.length);
        currentSize++;
        // balanced = false
      } else {
        let x = arr.pop();
        console.log(currentSize);
        // currentSize--;
        
        // console.log(x);
        // console.log(i);
        // console.log(arr.length);
        switch (st[i]) {
          case ")":
            if (x !== "(") balanced = false;
            break;
          case "}":
            if (x !== "{") balanced = false;
            break;
          case "]":
            if (x !== "[") balanced = false;
            break;
          default:
            // balanced = true;
            break;
            
        }
      }
    }

    
    if ( balanced && arr.length === 0) {
        console.log('true');
    //   return true;
    } else {
        console.log('false');
    //   return false;
    }   
  };

isValid(s);