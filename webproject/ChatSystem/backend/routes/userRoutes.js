const express=require('express');
const router=express.Router();
const db=require('../db/db');


//signup logic

router.post('/signup', (req,res)=>{

    const {username, email, password}=req.body;

    const sql='insert into signup (username, email, password) values(?,?,?);';

    db.query(sql, [username, email, password], (error, results)=>{
        if(error){
            console.log(`Could not send data to database due to error ${error}`);
            res.status(500).json({message:'Unsuccessful'});
            return;
        }

        res.status(200).json(({message:'Successful'}));
    })
})


//login logic

router.post('/login', (req,res)=>{

    const {email, password}=req.body;

    const sql='select * from signup where email=? and password=?;';

    db.query(sql, [email, password], (error, results)=>{
       if(error){
        console.log(`Could not login due to error ${error}`);
        res.status(500).json({message:'Error occurred'});
       return;   
    }

    if(results.length>0){
        res.status(200).json({message:'Succcessfully logged in'});
    }
    else{
        res.status(400).json({message:'Could not verify'});
    }
    })
})


module.exports=router;