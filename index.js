// const express = require("express");
// app=express()
// var mysql = require('mysql');
// app.use(express.json())
// var connection = mysql.createConnection({
// host     : 'localhost',
// user     : 'root',
// password : 'root@123',
// database : 'test'
// });
// app.post('/',(req,res)=>{
// connection.query("insert into test(name,email,message) values(?,?,?)",[req.body.name,req.body.email,req.body.message],function(error,results){
// if(error){
// console.log(error);
//  }
// res.json(results)
// });
// })
// connection.connect();
// app.listen(3000,()=>{
// console.log("listening on port 3000");
// })

const express = require("express");
var mysql = require("mysql");
var cors = require("cors");
app = express();
app.use(express.json());
app.use(cors());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@123",
  database: "test",
});
connection.connect();

// *****post*****
app.post("/insert", (req, res) => {
    console.log(req.body,"body")
  connection.query(
    "insert into testdetails (name,email,message) values(?,?,?)",
    [req.body.name, req.body.email, req.body.message],
    function (error, results) {
      if (error) {
        console.log(error);
      }
      res.json(results);
    }
  );
});
// get all
app.get("/getAll", (req, res) => {
    console.log('----------get all-------------')
    connection.query("select id,name,email,message from testdetails where is_active=?",[1],function (error, results) {
        if (error) {
          console.log(error);
        }
        console.log("The solution is: ", results);
        res.json(results);
      }
    );
  });

  // *****getByid*****
app.get("/:name", (req, res) => {
    connection.query(
      "SELECT name,email,message from testdetails where name = ?",
      [req.params.name, req.params.email, req.params.message],
      function (error, results) {
        if (error) {
          console.log(error);
        }
        console.log("The solution is: ", results);
        res.json(results);
      }
    );
  });
  // *****Update*****
  app.put('/put',(req,res)=>{
    connection.query("update testdetails set name=?,email=?,message=?  where id=?",[req.body.name,req.body.email,req.body.message,req.body.id] ,function(error,results){
    if(error){
    console.log(error);
   }
   res.json(results)
   });
   }) 
// app.listen(4000, () => {
//   console.log("listening on port 4000");
// });
// *****delete*****
app.put('/delete',(req,res)=>{
  connection.query("update testdetails set is_active=? where id=?",[req.body.is_active,req.body.id] ,function(error,results){
  if(error){
  console.log(error);
 }
 res.json(results)
 });
 }) 
app.listen(4000, () => {
console.log("listening on port 4000");
});