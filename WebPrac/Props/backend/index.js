const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');

const app=express();

const port=2500;

//use middleware
app.use(cors());
app.use(bodyparser.json());

//creating apis

//get method

const users=[{id:1, name:'Karan', age:26}, {id:2, name:'Alice', age:21}, {id:3, name:'Mohit', age:22}, {id:4, name:'Mohan', age:22} ];

app.get('/users/getusers', (req,res)=>{
    res.json(users);
})


//post method

app.post('/users/addusers', (req,res)=>{
    const newuser=req.body;

    users.push(newuser);
})


//running on port

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})