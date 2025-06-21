class Solution {
    minSwaps(nums) {
        // ToDo: Write Your Code Here.

let min=Infinity;

let max=0;

//finding minimum number
for(let i of nums){
    if(min>i){
        min=i
    }
}

//finding maximum number
for(let i of nums){
    if(max<i){
        max=i;
    }
}

if(nums[0]===min&&nums[nums.length-1]===max){
    return 0;
}

let minIndex=nums.indexOf(min);

let maxIndex=0;

if(nums[0]===min||nums[nums.length-1]===max){
maxIndex=nums.lastIndexOf(max);
}
else{
maxIndex=nums.lastIndexOf(max)+1;
}
 

return (minIndex-0)+((nums.length-1)-maxIndex);



        return 0;
    }
}

