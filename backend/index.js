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
    database: process.env.NODE_DATABSE
})

connection.connect((err) => {
    if (err) {
        console.log('error occured ', err.stack);
        return;
    }
    console.log('Connection established')
}) 

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api', (req, res) => {
    res.json({message: "HELLO WORLD"});
})

app.listen(port, (req, res) => {
    console.log(`listening on ${port}`)
    console.log(process.env.NODE_HOST)
    console.log(process.env.NODE_USER)
    console.log(process.env.NODE_PASSWORD)
    console.log(process.env.NODE_DATABASE)
    console.log(process.env.NODE_PORT)

})