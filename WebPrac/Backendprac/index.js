const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const app=express();


const port=2500;

//use middleware
app.use(cors());
app.use(bodyparser.json());


//creating api

const users=[{id:1, name:'Kevin', age:22},{id:2, name:'Alice', age:21}];


//get api
app.get('/api/users',(req,res)=>{
    res.json(users);
})

//post api
app.post('/api/addusers', (req,res)=>{
    const newuser=req.body;
    users.push(newuser);
    res.json(users);
})


app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})
