const express=require('express');
const cors=require('cors');
const userRoutes=require('../Backendprac1/routes/route');
const dataRoutes=require('../Backendprac1/apis/api');
const path=require('path');
require('dotenv').config();

const app=express();

const port=2500;

//setting up middlewares



app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//main code

app.use('/users',userRoutes);

app.use('/ejs', (req,res)=>{
    res.render('index');
})

app.use('/data', dataRoutes);


const apiKey=process.env.WEATHERAPI_KEY;

console.log(apiKey);

//dynamic ejs file serve

//listener

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})
