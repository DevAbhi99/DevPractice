//1) In this tutorial we will learn to set cookies
//2) Learn to use Bcrypt for encryption


const express=require('express');
const cookieparser=require('cookie-parser');
const bcrypt=require('bcrypt');
require('dotenv').config();
const jwt=require('jsonwebtoken');

const app=express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(cookieparser());

const port=2500;

const password=process.env.Password;
const secret=process.env.SECRET;


/*The thing about cookie is that when we set a cookie at any route in backend once the cookie is saved in the browser
we send another route then cookie is attached to the new route by default

*/
app.get('/', (req,res)=>{
    res.cookie("Karan", "Malhotra"); //setting up the cookie sending name cookie  cookie(key, value)
    res.send("cookie sent");
})


app.get('/data', (req,res)=>{
    console.log(req.cookies);
    res.send('Cookie sent from the backend');
})

//hashing a password
app.get('/encryptPassword', (req,res)=>{

res.send('Password encrypted!');



    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        console.log(password);
        console.log(hash);
    });
});

bcrypt.compare('Heybro', '$2b$10$EOOOI8M/puY6eYYZGfxmNea.M47Stm8ini.ggyHJ.7dcnQJdUqoju', function(err, result) {
   console.log(result);
});


})

app.get('/sendJwtData', (req,res)=>{

  let token=jwt.sign({email:'karan@gmail.com'}, secret);

  res.cookie('token', token);

  res.send('Token sent');

})

app.get('/getJwtData', (req,res)=>{

let data=jwt.verify(req.cookies.token, secret );

res.send('Token recieved from backend');
console.log(data);

})


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})