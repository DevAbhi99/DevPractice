const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Trishala@99',
    database:'backendprac'
});

connection.connect((err)=>{
    if(err){
        console.log(`Could not connect to database due to error ${err}`);
    }
    else{
        console.log('successfully connected to database');
    }


})


module.exports=connection;