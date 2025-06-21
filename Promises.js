//Promises are used in asynchronous programming specifically which is used to resolve if the program is executed successfully or reject the program.

let p=new Promise((resolve,reject)=>{

    let x=5;

    if(x>4){
        resolve('x is greater than 4!');
    }
    else{
        reject('x is lesser than 4!');
    }
})

p.then((message)=>{
    console.log(`Success due to message ${message}`);
}).catch((error)=>{
    console.log(`Error due to error ${error}`);
})


//fetch is a type of promise that is used in fetching data from the server 

let api_url='https://dummy.restapiexample.com/api/v1/employees';

fetch(api_url)
.then(response=>{
    response.json();
})
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log(error);
}
)



