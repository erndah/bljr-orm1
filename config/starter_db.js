const mysql = require("mysql")

let db = mysql.createConnection({
    host: "localhost",
    user : "root",
    password: "",
    database : "sequelizer_test"
})

// const sql = "CREATE DATABASE sequelizer_test"
const sql = `CREATE TABLE user
(
    id int NOT NULL AUTO_INCREMENT,
    nama VARCHAR(255),
    hobi VARCHAR(255),
    PRIMARY KEY (id)
)`


db.connect(err => {
    err ? console.error(err) : console.log("Connected to database");
})

// db.query(sql, (err, result) =>{
//     if(err) throw err
//     console.log("Database created");
// })

db.query(sql, (err, result) =>{
    if(err) throw err
    console.log("Table created");
})