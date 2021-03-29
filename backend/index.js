const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;

const connection = mysql.createConnection({
    host: process.env.NODE_HOST,
    port: process.env.NODE_PORT,
    user: process.env.NODE_USER,
    password: process.env.NODE_PASSWORD,
    // database: process.env.NODE_DATABSE
    database: 'nodejs_01practice'
})

connection.connect((err, results) => {
    if (err) {
        console.log('error occured ', err.stack);
        return;
    }
    console.log('Connection established')
}) 

app.get('/', (req, res) => {
    connection.query(
        'SELECT * FROM users;',
        (error, results) => {
            // console.log(results)
            console.log("query evoked")
        }
    );
})

app.get('/api', (req, res) => {
    res.json({message: "HELLO WORLD"});
})

app.get('/list', (req, res) => {
    connection.query(
        'SELECT * FROM users',
        (error, results) => {
            console.log('------', results[0])
            console.log('----------', results[0].email)
            res.json(results[0]) // オブジェクトをJSONにしてんのか
        }
    )
})

app.listen(port, (req, res) => {
    console.log(`listening on ${port}`)
    // console.log('--------------------')
    // console.log(process.env.NODE_DATABASE)
    // console.log('nodejs_01practice')
    // console.log('--------------------')
})