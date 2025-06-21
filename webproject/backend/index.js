const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mysql=require('mysql2');

const app=express();

const port=2500;

//setting up middlewares

app.use(cors());

app.use(bodyparser.json());


//setting up mysql connection

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Trishala@99',
    database:'netflixdb'
});

connection.connect((error)=>{
    if(error){
        console.log(`Could not connect to database due to error ${error}`);
    }
    else{
        console.log('Connected to database successfully');
    }
})



//Signup logic
app.post('/users/signup', (req,res)=>{

    const {username, email, password}=req.body;

    const sql='insert into signup (username, email, password) values(?,?,?);';

    connection.query(sql, [username, email, password], (err,results)=>{
        if(err){
            console.log(`Could not signup due to error ${err}`);
            res.status(500).json({message:'could not signup'});
          return;
        }

        res.status(200).json({message:'Success'});
    })
})

//login logic

app.post('/users/login', (req,res)=>{
    const {email, password}=req.body;

    const sql='select * from signup where email=? and password=?;';

    connection.query(sql, [email, password], (err, results)=>{
        if(err){
            console.log(`Could not login due to error ${err}`);
            res.status(500).json({message:'Error occurred'});
          return;
        }

        if(results.length>0){
            res.status(200).json({message:'Success'});
        }
        else{
            res.status(401).json({message:'Could not login'});
        }
    })
})


//Creating apis for movies

const data=[{url:'https://1.bp.blogspot.com/-9Ys6kScXgf0/W6yApNSb5aI/AAAAAAAABWM/podw57hgXvsVY-JYl7sThU34NT-IcMz-ACLcBGAs/s1600/batman%2Bwallpaper.jpg', name:'The dark knight'},{url:'https://wallpaperaccess.com/full/3997193.jpg', name:'Superman'}, {url:'https://variety.com/wp-content/uploads/2015/06/mr-robot.jpg',name:'Mr. Robot'}];

app.get('/users/movies', (req,res)=>{
    res.json(data);
})

//listening on port

app.listen(port, ()=>{
console.log(`Listening on port ${port}`);
})