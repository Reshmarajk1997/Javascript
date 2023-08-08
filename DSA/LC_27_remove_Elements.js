
var removeElement = function(nums, val) {
    let j = 0,i=0,count =0;
        for(i=0;i<nums.length;i++,j++) { 
          while(nums[i]==val){
              i++;  
          }
          if(i>nums.length-1){
            break;
          }
          nums[j]=nums[i]
        } 
        return j;  
  };

arr = [3,2,2,3]
val = 3
console.log(removeElement(arr,val));
console.log(arr);