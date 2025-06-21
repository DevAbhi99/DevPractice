class Solution {
    reverse(x) {
        // ToDo: Write Your Code Here.

let s=x.toString();

let sum='';

if(x<0){
    for(let i=s.length-1;i>=1;i--){
        sum+=s.charAt(i);
    }
    sum='-'+sum;
}
else{
    for(let i=s.length-1;i>=0;i--){
        sum+=s.charAt(i);
    }
}


if(parseInt(sum)<Math.pow(-2, 31) || parseInt(sum)>(Math.pow(2,31))-1){
    return 0;
}

return parseInt(sum);

       
    }
}

