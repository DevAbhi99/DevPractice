let s=' heyman ';


//1) toUpperCase()

let ns=s.toUpperCase();

console.log(ns);


//2) toLowerCase()

console.log(ns.toLowerCase());

//3) trim()

console.log(s.trim());

//4) charAt()

console.log(s.charAt(1));

//5) split :- convert string to array

let arr=[];
arr=s.split('');
console.log(arr);

//6) join:- converts array to string

let ls=arr.join('');

console.log(ls);

//7) indexOf()

console.log(s.indexOf('e'));

//) startsWith()

console.log(s.startsWith(' '));


//endsWith()

console.log(s.endsWith(' '));

//includes()

console.log(s.includes('y'));

//replace()

let nls=s.replace('e', 's');

console.log(nls);


//replaceAll()

