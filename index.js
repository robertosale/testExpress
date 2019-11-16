const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const url = require('url');


let app = express();
app.use(bodyparser.json());

app.use(express.static('testAjax'));


let mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Lapicera123!',
    database: 'EJ9',
   

});

mysqlConnection.connect((err)=>{
    if(!err)console.log("The connection to the DataBase was succesfull");
    else console.log("Error in the DataBase connection: \n" + JSON.stringify(err,undefined,2));
});

app.listen(3000,()=>{
    console.log("Express is running at port 3000");
})


app.get('/request',(req,res)=> {
    var result;
    
    mysqlConnection.query(`SELECT * FROM vistaTotal
                        WHERE LOWER(Pelicula) LIKE \'%${req.query.peli.toLowerCase()}%\'`,(err,result,fields)=>{
        
        res.send(result);
        console.log(result);

    });


});




////Esta prueba me devolvía todo el array de json de peliculas

// app.get('/request',(req,res)=> {
//     var result;
//     mysqlConnection.query(`SELECT * FROM Pelicula `,(err,result,fields)=>{
        
        // Object.keys(result).forEach((key)=>{      //Esto recorre cada uno de los elementos del array result
        //     let row = result[key];
        //     console.log(row);
           
        // });
//         res.send(result);

//     });
   
//});