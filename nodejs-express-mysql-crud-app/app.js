const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getHomePage} = require('./routes/index');
 const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
/****set the port to listen server***/
const port=2000;

/****configuration object to connection for database***/
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'nodejs_crud_db'
});

/****Connect to database***/
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Connected to database')
});

global.db = db;
/***configure middleware** */
/*****set express to use this port****/
app.set('port', process.env.port || port); 
/******set express to look in this folder to render our view*****/
app.set('views', __dirname + '/views');
/****configure template engine*** */
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
/**** parse form data client****/
app.use(bodyParser.json());
/*****configure express to use public folder***/
app.use(express.static(path.join(__dirname, 'public')));
/****configure fileupload***/
app.use(fileUpload());

// routes for the app

app.get('/', getHomePage);
app.get('/add', addPlayerPage);
app.get('/edit/:id', editPlayerPage);
app.get('/delete/:id', deletePlayer);
app.post('/add', addPlayer);
app.post('/edit/:id', editPlayer);


/****set the app to listen on the port */ 
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
