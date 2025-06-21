let arr=[1,2,3,4,5,6,7,8];

let target=4;

let i=0;

let j=arr.length-1;

while(i<=j){
    let middle=Math.floor((i+j)/2);

    if(arr[middle]===target){
        console.log('found!');
        break;
    }
    else if(arr[middle]<target){
        i=middle+1;
    }
    else{
        j=middle-1;
    }
}