let nums=[9, 8, 7, 3, 2, 1, 6];

//solution

let res=[];


for(let i=0;i<nums.length;i++){
let found=false;
    for(let j=1;j<nums.length;j++){
        let idx=(i+j)%nums.length;
        if(nums[idx]>nums[i]){
            res.push(nums[idx]);
            found=true;
            break;
        }
    }

    if(!found){
    res.push(-1);
}
}



console.log(res);