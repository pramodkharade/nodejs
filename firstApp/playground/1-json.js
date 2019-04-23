const fs = require('fs');
const book = {
	title:'Ego is the Enemy',
	author:'Ryan Holiday'
}
const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json',bookJSON); // To write Json in json file

/***Read the JSON file*/

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log('Title Is:',data.title);

/*** Override the value of key json file*/
book.title = 'Fire Of wings';

const bookJson1 = JSON.stringify(book);
fs.writeFileSync('1-json.json',bookJson1);