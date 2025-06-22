/*
You are given a binary array seats representing the row of seats, where seats[i] = 0 represents that the ith seat is empty, and seats[i] = 1 represents a person sitting in the ith seat. It is given that seats array contains at least one 1 and 0.

You want to sit in any seat such that the distance between you and the closest person to you is maximized.

Return that maximum distance to the closest person.
*/ 

let seats=[1,0,0,0,1,0,0];


//solution 

let hm=new Map();

for(let i=0;i<seats.length;i++){
    hm.set(i,seats[i]);
}

let maxDistance=0;


for(let [i, val] of hm){
    if(val===0){
        let left=i-1;
        let right=i+1;
        let distLeft=Infinity;
        let distRight=Infinity;

        while(left>=0){
            if(hm.get(left)===1){
                distLeft=i-left;
                break;
            }
            left--;
        }

        while(right<seats.length){
            if(hm.get(right)===1){
                  distRight=right-i;
                  break;
            }
            right++;
        }

        let currDistance=Math.min(distLeft, distRight);

        maxDistance=Math.max(maxDistance, currDistance);
    }
}

console.log(maxDistance);