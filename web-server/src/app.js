const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname,'../public'));
const app = express();
const publicdirectoryPath = path.join(__dirname,'../public');

app.use(express.static(publicdirectoryPath));
/*** Routes*****/
app.get('/help',(req,res)=>{
    res.send([{
        name:'Pramod Kharade',
        age:32
    }]);
});
app.get('/about',(req,res)=>{
    res.send('about Page');
});

app.get('/weather',(req,res)=>{
    res.send('Weather Page');
});

app.listen(3000,()=>{
    console.log('Server is running on 3000 ');
});