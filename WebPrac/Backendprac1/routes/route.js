const express=require('express');
const router=express.Router();
const db=require('../config/db');


//signup

router.post('/signup', (req,res)=>{

    const {username, email, password}=req.body;

    const sql='insert into signup (username, email, password) values(?,?,?);';

    db.query(sql, [username, email, password], (error, results)=>{
        if(error){
            console.log(`Error ${error} occured while sending data`);
            res.status(500).send({message:'Error sending data to backend'});
            return;
        }

        res.status(200).send({message:'Successfully sent data to the backend'});
    })
})

//login 

router.post('/login', (req,res)=>{

const {email, password}=req.body;

const sql='select * from signup where email=? and password=?;';

db.query(sql, [email, password], (error, results)=>{
if(error){
    console.log(`Error ${error} occured while logging in`);
            res.status(500).send({message:'Could not login'});
            return;
}

if(results.length>0){
    res.status(200).send({message:'Logged in successfully'});
}
else{
    res.status(400).send({message:'Error loggin in'});
}

});

})

module.exports=router;