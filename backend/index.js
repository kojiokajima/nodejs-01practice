const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3200;


// ---------------------------------
const tableName = 'users';
// ---------------------------------

app.use(bodyParser.urlencoded({extended: true}));
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

// connection.query(
//     'SHOW FIELDS FROM users;',
//     (error, response) => {
//     console.log('response: ', response);
// });



connection.query(
    'SHOW tables',
    (err, results) => {
        if (err) {
            console.log("CANT SHOW")
        } else {
            // console.log(results)
        }
    }
)

connection.query(
    'SELECT * FROM users;',
    (err, results) => {
        if (err) {
            console.log('NO DATA WAS SELECTED');
        } else {
            // console.log("SELECT: ", results)
            // results.json({message: results[0].email})
        }
    }
)

// ---------------------------------

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
        'SELECT * FROM users;',
        (error, results) => {
            if (error) {
                console.log('CANT GET DATA');
            } else {
                // console.log('------', results[0])
                // console.log('----------', results[0])
                res.json(results[0]) // オブジェクトをJSONにしてんのか
            }
        }
    )
})

app.post('/list', (req, res) => {
    const firstName = req.body.firstName
    console.log("YOOOOOOOO")
    console.log("REQ: ", firstName)
})

// SIGN UP 
// app.get('/signup', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/src/conponents/organisms/Home.jsx'))
// })

app.post('/signup',
    (req, res, next) => {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        const error = ''
        
        console.log("SIGNUP EVOKED")

        if (firstName === '' || lastName === '' || email === '' || password === '') {
            error = "All fields are required. Please try again."
            console.log(error)
        }

        connection.query(
            'INSERT INTO users (f_name, l_name, email, password) VALUES (?, ?, ?, ?)',
            [firstName, lastName, email, password],
            (err, res) => {
                if (err) {
                    console.log("DATA NOT ADDED")
                    console.log(err)
                } else {
                    console.log("DATA ADDED!")
                    // console.log(res)
                }
            }
        )
        
        res.redirect('/')

    }
)

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