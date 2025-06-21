/*
You are given an array nums consisting of positive integers.

You can perform below two operations on the array multiple times:

Select two elements with equal values and delete them from the array.
Select three elements with equal values and delete them from the array.
Return the minimum number of operations required to make the array empty, or -1 if it is not possible.
*/ 

class Solution {
    minOperations(nums) {
        // ToDo: Write Your Code Here.

//using hashmap we can easily solve it
        let hm=new Map();

        for(let i of nums){
            if(hm.has(i)){
                hm.set(i, hm.get(i)+1);
            }
            else{
                hm.set(i, 1);
            }
        }


let totops=0;

for(let [k,v] of hm){
    if(v===1){
        return -1;
    }

    let ops=Math.floor(v/3);

    let rem=v%3;

    if(rem===0){
        totops+=ops;
    }
    else{
        totops+=ops+1;
    }
}

return totops;

    }
}

