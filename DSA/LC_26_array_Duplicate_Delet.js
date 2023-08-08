
 
var removeDuplicates = function(nums) {
    let j =0;
         for(let i=0;i<nums.length;i++,j++){
             next_index = i+1
             nums[j] = nums[i]
             while(nums[i]==nums[next_index]){
                 next_index++;
             }
             i=next_index-1
         }
          return j;
 };
 nums = [0,0,1,1,1,2,2,3,3,4]
 console.log(removeDuplicates(nums))
 console.log((nums))
  