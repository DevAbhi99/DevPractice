//express setup
const express=require('express');
const path=require('path');

const app=express() //initialize express

const port=2500;

//setup middlewares

app.use(express.json());

app.use(express.urlencoded({extended:true})); //this and the above line helps in converting the data from blob format to readable format

app.use(express.static(path.join(__dirname, 'public'))); //to serve static files

app.set('view engine', 'ejs'); //set view engine as ejs to serve ejs files

//send data to frontend

app.get('/', (req,res)=>{  //serving ejs file
    res.render('index');
})

//dynamic routing

app.get('/profile/:username', (req,res)=>{
    
    res.send('hi '+req.params.username);  //req.params is equal to : and username is username mentioned in the dyanamic route
})


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})

