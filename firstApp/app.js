const getNote = require('./utils');
const validator = require('validator');
const fs = require('fs');
//fs.writeFileSync("notes.txt","This file was created by nodejs.My name is Pramod Kharade...");
fs.appendFileSync('notes.txt','I am working with Blazeclan');
const msg = getNote();
console.log('Message is:', msg);
console.log(validator.isEmail('pramod@@gmail.com'));
