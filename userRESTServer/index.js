const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/angular6login',{ useNewUrlParser: true }).then(()=>console.log('Mongoose Up'));
const User = require('./model/users');
app.post('/api/login',async (req,res)=>{
  const {username,password}= req.body;
  const res = await User.findOne({username,password});
  if(!res){
    //user login is incorrect
  }else{
    //create session in express
  }
});
app.post('/api/register',(req,res)=>{
	const {username,password} = req.body;
	/***store user in  database**/
	userModel.save({});
    console.log(req.body);
});
app.listen(1234,()=>{ console.log('Server is listening at 1234');});