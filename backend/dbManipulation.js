const express = require('express');
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;

const connection = mysql.createConnection({
    user: process.env.NODE_USER,
    password: process.env.NODE_PASSWORD,
    host: process.env.NODE_HOST,
    // database: process.env.NODE_DATABSE,
    database: 'heroku_530121ea020abc8',
    port: process.env.NODE_PORT,
    // database: 'nodejs_01practice'
})

connection.connect((error, results) => {
    if (error) {
        console.log('error occured ', error.stack);
        return;
    }
    console.log('Connection established')
    // console.log('results: ', results)
    // console.log(__dirname)
})

connection.query(
    'CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT, f_name TEXT, l_name TEXT, email TEXT, password TEXT, PRIMARY KEY (id));',
    (error, response) => {
        if (error) {
            console.log('ERROR CREATING TABLE')
            console.log('error: ', error);
        }
    }
);

connection.query(
    "INSERT IGNORE INTO users (f_name, l_name, email, password) VALUES ('test1', 'user1', 'test1@gmail.com', 'test1');",
    (err, results) => {
        if (err) {
            console.log("DATA WAS NOT INSERTED")
        } else {
            console.log('resultssss: ', results)
        }
    }
)