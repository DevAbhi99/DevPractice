const express=require('express');
const cors=require('cors');
const app=express();
const userRoutes=require('../backend/routes/userRoutes');

const port=2500;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//main code

app.use('/user', userRoutes);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})