let arr=[[1,2,3],[4,5,6]];

let row=arr.length;
let col=arr[0].length;

console.log(arr);
console.log(row);
console.log(col);


//looping through two d array

for (let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        if(arr[i][j]%2==0){
            console.log(arr[i][j]);
        }
    }
}