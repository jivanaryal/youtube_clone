const mysql = require("mysql2");
const pool = mysql.createPool({
host:process.env.DB_HOST,
user:process.env.DB_USER,
database:process.env.DB_NAME,
password:process.env.DB_PASSWORD
})
pool.getConnection((err)=>{
    if (err) throw err;
    console.log("connected to mysql");
})
module.exports = pool.promise();