//In this module we gonna learn about string methods in javascript

let s=' abaabac ';

//a) charAt(index) :- return character at the mentioned index

console.log(s.charAt(0));

//b) indexOf(character):- returns index value of the character 

console.log(s.indexOf('a'));

//c) lastIndexOf(character):- returns last index value of the character

console.log(s.lastIndexOf('a'));

//d) trim():- removes space from both ends of the string

console.log(s.trim());

//e) startsWith():- returns boolean value if the character exists in the string

console.log(s.startsWith('a'));

//f) endsWith():- returns boolean value if the character ends in the strings

console.log(s.endsWith('c'));

//g) toUpperCase():- returns string in its uppercase form

console.log(s.toUpperCase());

//h) toLowerCase():- returns string in its lower case form

console.log(s.toLowerCase());

//i) repeat(number of times):- returns repeated string 

console.log(s.repeat(3)); //repeats thrice

//j) concat():- joins the string
let ns=s.trim();

console.log(ns.concat('himan'));

//k) replaceAll('old character', 'new  character')

//remove all - in a phone number

let phonenumber='981-991-8536';

phonenumber=phonenumber.replaceAll('-','');

console.log(phonenumber);

//l) padStart(number, character):- add character at the start of the string untill the total character becomes number mentioned in the function

let newph=phonenumber.padStart(11, '0');


console.log(newph);

//m) padEnd():- adds character at the end
