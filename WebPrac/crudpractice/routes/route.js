const express=require('express');
const router=express.Router();
const db=require('../config/db');


//Crud operations

//1) post:- sending data like empid, name and designation

router.post('/sendData', (req,res)=>{

    const {empid, name, designation}=req.body;

    const sql='insert into employee(empid, name, designation) values (?,?,?);';

    db.query(sql, [empid, name, designation], (error, results)=>{
       if(error){
        console.log(`Could not send data to the backend due to error ${error}`);
        res.status(500).json({message:'Error occurred'});
       return;   
    }

    res.status(200).json({message:'Successfully sent data to the database'});

    })
})

//2) get:-  I will fetch data like empid, name and designation

router.get('/getData', (req,res)=>{

    const sql='select * from employee;';

    db.query(sql, (error, results)=>{
        if(error){
            console.log(`Could not fetch data due to error ${error}`);
            res.status(500).json({message:'Error occurred'});
           return;
        }
         res.status(200).json(results);
    })
})

//3) update:- I will update data on the basis of empid

router.put('/updateData', (req,res)=>{

    const {name, empid}=req.body;

    const sql='update employee set name=? where empid=?;';

    db.query(sql, [name, empid], (error, results)=>{
        if(error){
            console.log(`Could not update data due to error ${error}`);
            res.status(500).json({message:'Error occurred'});
           return;
        }

        res.status(200).json({message:'Data Updated'});
    })
})


//4) delete:- I will delete the data on the basis of empid

router.delete('/deleteData', (req,res)=>{

    const {empid}=req.body;

    const sql='delete from employee where empid=?';

    db.query(sql, [empid], (error,results)=>{
          console.log(`Could not delete data due to error ${error}`);
            res.status(500).json({message:'Error occurred'});
           return;
    })

     res.status(200).json({message:'Data Deleted'});
})


module.exports=router;