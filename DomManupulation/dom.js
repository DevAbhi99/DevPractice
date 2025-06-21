/*
//creating div using javascript

let body=document.body;
let div=document.createElement("div"); //creating div element
div.innerText='Hello World!'; //writing content for the div element
let inp=document.getElementById('txtbox'); //selecting element on the basis of the id 

//inner html to create bold tag
let div2=document.createElement("div");
div2.innerHTML='<b>Hello Inner Html</b>';


//another way of creating bold tag
let b=document.createElement('b');
b.innerText='Hi bold!';



console.log(inp.value); //printing value of input 
console.log(div.innerText);  //printing text of the div
body.append(div); //adding div to the body
body.append(div2);
body.append(b);
*/

//removing elements using DOM manipulation
/*
let body=document.body;

let inp=document.querySelector('#txtbox');

body.append(inp);

inp.remove(inp);
*/

//modifying and removing attributes from an element

let body=document.body;


//modifying attribute in an element
let inp=document.querySelector('#txtbox');

inp.id='textbox';

console.log(inp.getAttribute('id'));

//removing element 
inp.removeAttribute('id');

console.log(inp.getAttribute('id'));

body.append(inp);

