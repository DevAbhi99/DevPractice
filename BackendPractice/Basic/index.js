//setting up basic express application
//routing
//middleware
//request and response handling
//error handling


const express=require('express');

const app=express();

const port=2500;


/*creating middleware:- middle ware handles requests from user before the request go to the route and the response is sent everytime a server accepts a request
middle ware is created using app.use and function in it with 3 parameters req,res and next to forward to the request
*/

app.use(function(req,res, next){
console.log('middleware is working');
next();
})

//routing

app.get('/home', (req,res)=>{
    res.send('this is home');
})

app.get('/login', (req,res)=>{
    res.send('This is login');
})

app.get('/signup', (req,res)=>{
    res.send('This is signup');
})


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})