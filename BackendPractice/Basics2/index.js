const express=require('express');
const app=express();

//session and cookies. Cookie is a string that exist in both the server and the browser (frontend) a common string between the user and the server which helps the server remember the user to establish a connection which is called session

const port=2500;


//setting up middleware

app.use(express.json());

app.use(express.urlencoded({extended:true}));  //these middle ware line of code helps in converting the data sent to a server from blob format to readable format


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})