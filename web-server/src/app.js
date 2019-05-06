const path = require('path');
const express = require('express');
const hbs = require('hbs');
console.log(__dirname);
console.log(path.join(__dirname,'../public'));
const app = express();
/****Define path to express config*****/
const publicdirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partial');
/****Setups handlebar and views location**** */
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);
/****Static directory to serve *** */
app.use(express.static(publicdirectoryPath));
/*** Routes*****/
app.get('',(req,res)=>{
    res.render('index',{
        title:"Weather App",
        name:'Pramod Kharade'
    });
});
app.get('/help',(req,res)=>{
    res.render('help',
    {
        title:"Help",
        helptext:'Nodejs is existing to learn...!',
        name:'Pramod Kharade'
    });
});
app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About Me",
        name:'Pramod Kharade'
    });
});

app.get('/weather',(req,res)=>{
    res.send('Weather Page');
});

app.listen(3000,()=>{
    console.log('Server is running on 3000 ');
});