const add = require('./utils');
const fs = require('fs');
//fs.writeFileSync("notes.txt","This file was created by nodejs.My name is Pramod Kharade...");
fs.appendFileSync('notes.txt','I am working with Blazeclan')
console.log(add(1,2));