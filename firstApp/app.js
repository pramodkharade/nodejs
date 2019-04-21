const getNote = require('./utils');
const validator = require('validator');
const chalk = require('chalk');
const fs = require('fs');
//fs.writeFileSync("notes.txt","This file was created by nodejs.My name is Pramod Kharade...");
fs.appendFileSync('notes.txt','I am working with Blazeclan');
const msg = getNote();
console.log('Message is:', msg);
if(validator.isEmail('pramod@gmail.com')){
    console.log(chalk.green('Validate Email address'));
}else{
    console.log(chalk.red('Invalidate Email address'));
}

