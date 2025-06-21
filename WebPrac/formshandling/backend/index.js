const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mysql=require('mysql2');

const port=2500;

//setup express
const app=express();

//using middleware
app.use(cors());

app.use(bodyparser.json());


//setting up my sql connection

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Trishala@99',
    database:'pracdev'
});

connection.connect((error)=>{
    if(error){
        console.log(`Could not connect to database due to error ${error}`);
    }
    else{
        console.log(`Connected to database successfully`);
    }
});

//setting up code for signup
app.post('/api/signup', (req,res)=>{
    const {name, email, password}=req.body;

    const sql='insert into signup(name, email, password) values(?,?,?);';

    connection.query(sql, [name, email, password], (error,results)=>{
        if(error){
            console.log(`data could not be sent due to error ${error}`);
            res.status(500).json({message:'Data could not be sent'});
            return;
        }
        
            res.status(200).send('Data sent successfully');
        
    })
});

//setting up code for login

app.post('/api/login', (req,res)=>{
    const {email, password}=req.body;

    const sql='select * from signup where email=? and password=?;';

    connection.query(sql, [email, password], (err,results)=>{
        if(err){
            console.log(`Error ${err}`);
            res.status(500).json({message:'Error'});
            return;
        }
       
        if(results.length>0){
        res.status(200).json({message:'Login Successful'});
        }
        else{
           res.status(401).json({message:'Could not login'});
        }
    })
})


app.listen(port, ()=>{
    console.log(`server listening on port ${port}`);
})