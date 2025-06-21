// promises

let p=new Promise((resolve,reject)=>{
    let x=5;
    if(x>4){
        resolve('X is greater than 4');
    }
    else{
        reject('X is smaller than 4');
    }
})

p.then((message)=>{
    console.log(`Resolved due to ${message}`)
}).catch((error)=>{
    console.log(`Could not resolve due to error ${error}`);
})

//async await 

let base_url='https://jsonplaceholder.typicode.com/todos/1';
/*
async function fetchData(){

    let response=await fetch(base_url);
    let data=await response.json();

    console.log(data);
}

fetchData();
*/
//Using fetch to retrieve data from from the backend of the server. Fetch is a promise

fetch(base_url)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(`Error ${error} occurred!`);
})