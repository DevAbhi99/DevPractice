// array functions

let arr=[1,2,3,4,5,6,7,8,9];

//splitting the array

//a) slice
console.log(arr.slice(1,4));

//b) splice
console.log(arr.splice(1,3));


let arr1=[7,6,4,3,5,2,1];

//arranging the array

//a) sort
arr1.sort((a,b)=>a-b);

console.log(arr1);

//b) reverse

console.log(arr1.reverse());


let arr2=[1,2,3,4,3,5,6,7,8,8,8];

//Finding elements in array

//a) indexOf

console.log(arr2.indexOf(3));

//b) lastIndexOf

console.log(arr2.lastIndexOf(3));


let arr3=[1,2,3,4,5,6,7,8];

//inserting and adding elements in array


//a) push()

arr3.push(9);

console.log(arr3);

//b) pop()

arr3.pop();

console.log(arr3);

//unshift()

arr3.unshift(9);

console.log(arr3);

//shift

arr3.shift();

console.log(arr3);

//convert from iterator to an array

let set=new Set(arr1);

console.log(set);

let arrnew=Array.from(set);

console.log(arrnew);

//array with string characters

let arr4=['e','f','a','b','c','d'];

//sorting the array

arr4.sort();

console.log(arr4);

//joining the strings in array

let s=arr4.join('');

console.log(s);

//functions in array


let newarr=[1,2,3,4,5,6,7];

//a) map:- using this function we can perform operation on everyb element in the array together

let mapped=newarr.map(e=>e*2);

console.log(mapped);

//b) filter:- we can filter the elements from an array like put a condition and accordingly retrieve them

let filtered=newarr.filter(e=>e%2==0)

console.log(filtered);

//c) reduce:- reduce the elements to a particular result in an arrays

let reduced=newarr.reduce((a,e)=>a+e);

console.log(reduced);

