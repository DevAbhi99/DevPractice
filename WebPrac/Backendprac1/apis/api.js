const express=require('express');
const router=express.Router();

const userData=[{id:1, name:'Karan', age:26},{id:2, name:'Mohit', age:22},{id:3, name:'Alice', age:25}];


//get api

router.get('/getUserData', (req,res)=>{
    res.json(userData);
})

//post api

router.post('/sendUserData', (req,res)=>{
    
    const data=req.body;
    
    userData.push(data);

    res.json(userData);
})


module.exports=router;