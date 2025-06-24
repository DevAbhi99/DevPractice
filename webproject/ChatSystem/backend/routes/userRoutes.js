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


//sending message to the database

router.post('/sendMessage', (req,res)=>{
    const {message}=req.body;

    const sql='insert into message(message) values(?);';

    db.query(sql, [message], (error, results)=>{
        if(error){
            console.log(`Could not send message to the database due to error ${error}`);
            res.status(400).json({message:'Error'});
           return;
        }

        res.status(200).json({message:'Successfully sent data to database'});
    })
})

router.get('/getMessage', (req,res)=>{

    const sql='select message from message;';

    db.query(sql, (error, results)=>{
        if(error){
            console.log(`Could not retrieve message from database due to error ${error}`);
            res.status(400).json({message:'Error'});
           return;
        }
        res.status(200).json(results);
    })
})


module.exports=router;