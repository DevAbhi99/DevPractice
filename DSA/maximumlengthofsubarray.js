/*
Given an integer array nums, find the maximum length of a subarray where the product of all its elements is greater than 0.

A subarray is a sequence of consecutive elements from the original array.
*/

let nums=[1, -2, 3, 4];

let positiveCount=0;
let negativeCount=0;
let maxLength=0;

for(let num of nums){
    if(num>0){
        positiveCount++;
        negativeCount=negativeCount>0?negativeCount+1:0;
    }
    else if(num<0){
        let temp=positiveCount;
        positiveCount=negativeCount>0?negativeCount+1:0;
        negativeCount=temp+1;
    }
    else{
        positiveCount=0;
        negativeCount=0;
    }
}

console.log(Math.max(maxLength, positiveCount));