const express = require('express');
const cors =require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
   host:"localhost",
   user: "root",
   password : "",
   database : "axia",
})

app.post('/register' , (req,res)=>{
  
   const sentEmail = req.body.Email
   const sentUserName =req.body.UserName
   const sentPassword =req.body.Password

   const SQL = 'INSERT INTO register (email,username,password) VALUES (?,?,?)'
   const Values=[sentEmail,sentUserName,sentPassword]

   db.query(SQL,Values,(err,results)=>{
      if(err){
         res.send(err)
      }
      else{
         console.log('User inserted successfully!')
         res.send({message:'User added !'})
      }

   })
})

app.post('/login' , (req,res)=>{
  
   const sentEmail = req.body.Email
   const sentPassword =req.body.Password

   const SQL = 'SELECT * FROM login WHERE email = ? && password = ?'
   const Values=[sentEmail,sentPassword]

   db.query(SQL,Values,(err,results)=>{
      if(err){
         res.send({error: err})
      }
      if(results.length >0){
         res.send(results)

      }else{
         res.send({message:'These doesnt match'})
      }

   })
})

app.listen(8081 , () => {
   console.log("Listening ...");
}) 