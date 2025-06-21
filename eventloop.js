//Event loop is used in handling async code. It delays a code inorder to run another code synchronously



setTimeout(()=>{
    let x=5;

if(x>4){
    console.log('x is greater');
}
else{
    console.log('x is smaller');
}
}, 3000);

console.log('Hello World!');