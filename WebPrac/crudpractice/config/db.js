const mysql=require('mysql2');

const connection=mysql.createConnection({
host:'localhost',
user:'root',
password:'Trishala@99',
database:'crud'
});

connection.connect((error)=>{
    if(error){
        console.log(`Could not connect to the database due to error ${error}`);
    }
    else{
        console.log('Could successfully connect to the database');
    }
})

module.exports=connection;