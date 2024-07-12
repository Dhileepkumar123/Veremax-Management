// const mysql = require("mysql2");
const mysql2 = require("mysql")

const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    database: "cafenodejs",
    password: "Mysql@1234&-+"
  });
  
connection.connect( (err)=>{
  if(err) throw err
  console.log("Database Connected Successfully");
})

module.exports.connection;