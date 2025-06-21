// A closure is a function inside of a function that remembers and can access the variable that has been created. It is used in remembering a variable or a data and using it anywhere in the function.


// Example1

let message1='I am boss';

let outer=()=>{

    let message='hello world!';

    let inner=()=>{
        console.log(`hi ${message} ${message1}`);   //So inner function uses outer remembers the variables and use it anywhere within its scope 
    }

    return inner();

}

let greet=outer;

greet();