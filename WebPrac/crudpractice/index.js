const express=require('express');
const cors=require('cors');
const userRouter=require('../crudpractice/routes/route');

const app=express();

const port=2500;

//use middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//main code

app.use('/users', userRouter);


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})