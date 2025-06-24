const mysql=require('mysql2');

const connection=mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'Trishala@99',
    database:'chatsystem'
});


connection.connect((err)=>{
    if(err){
        console.log(`Could not connect to the database due to error ${error}`);
    }
    else{
        console.log('Successfully connected to database');
    }
})

module.exports=connection;