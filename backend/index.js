const express = require('express');
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;

// ---------------------------------
const tableName = 'users';
// ---------------------------------

app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.use(express.static(path.join(__dirname, '../frontend/build')));

const connection = mysql.createConnection({
    user: process.env.NODE_USER,
    password: process.env.NODE_PASSWORD,
    host: process.env.NODE_HOST,
    // database: process.env.NODE_DATABSE,
    database: 'heroku_530121ea020abc8',
    port: process.env.NODE_PORT,
    // database: 'nodejs_01practice'
})

// connection.connect((err, results) => {
//     if (err) {
//         console.log('error occured ', err.stack);
//         return;
//     }
//     console.log('Connection established')
//     console.log(__dirname)
// }) 

// ---------------------------------
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

// connection.query(
//     'SHOW FIELDS FROM users;',
//     (error, response) => {
//     console.log('response: ', response);
// });

connection.query(
    "INSERT IGNORE INTO users VALUES (1, 'test1', 'user1', 'test1@gmail.com', 'test1');",
    (err, results) => {
        if (err) {
            console.log("DATA WAS NOT INSERTED")
        } else {
            console.log('resultssss: ', results)
        }
    }
)

connection.query(
    'SHOW tables',
    (err, results) => {
        if (err) {
            console.log("CANT SHOW")
        } else {
            console.log(results)
        }
    }
)

connection.query(
    'SELECT * FROM users;',
    (err, results) => {
        if (err) {
            console.log('NO DATA WAS SELECTED');
        } else {
            console.log("SELECT: ", results)
        }
    }
)

// ---------------------------------

// app.get('/', (req, res) => {
//     connection.query(
//         'SELECT * FROM users;',
//         (error, results) => {
//             // console.log(results)
//             console.log("query evoked")
//         }
//     );
// })

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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})

app.listen(port, (req, res) => {
    console.log(`listening on ${port}`)
    // console.log('--------------------')
    // console.log(process.env.NODE_DATABASE)
    // console.log('nodejs_01practice')
    // console.log('--------------------')
})