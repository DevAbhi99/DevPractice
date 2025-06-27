let arr=[1,2,3,4,5,6,7,8];


//1) push()

arr.push(9);

console.log(arr);

//2) pop()

arr.pop()

console.log(arr);

//3) length

//4) splice()

arr.splice(1,3);

console.log(arr);

//5) slice()

console.log(arr.slice(1,4));

//6) sort()

arr.sort();
console.log(arr);

//7) reverse()

arr.reverse();
console.log(arr);

//map() :- performs operations on all elements in the array

console.log(arr.map(e=> e*2));


//filter():- filters out the elements in the array on the basis of the condition set

console.log(arr.filter(e=>e%2==0));

//reduce():- finds aggragate of elements in an array

console.log(arr.reduce((e, acc)=>e+acc));




