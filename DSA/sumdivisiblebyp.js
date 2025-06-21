/*
Given an array nums containing the positive integers, remove the smallest subarray (maybe empty) from nums such that the sum of the remaining elements is divisible by p. You are not allowed to remove the whole array.

Return the length of the smallest subarray that you need to remove, or -1 if it's not possible.

A subarray is a contiguous sequence of elements in the array.
*/


class Solution {
    minSubarray(nums, P) {
        // ToDo: Write Your Code Here.

let set=new Set(nums);

let arr=Array.from(set);

let sum=0;
let count=0;

  for(let i of nums){
    sum+=i;
  }

  if(sum%P===0){
    return 0;
  }

  for(let i of arr){
    if((sum-i)%P==0){
        count++;
    }
  }
       if(count===0){
        return -1;
       }

       return count;
    }
}

