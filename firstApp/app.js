const getNote = require('./utils');
const chalk = require('chalk');
const yargs = require('yargs');

const command = process.argv[2];
//create add command
yargs.command({
    command:'add',
    describe:' Add a new note!',
    handler: function(){
        console.log('Adding new note!');
    }
});

//create remove command
yargs.command({
    command:'remove',
    describe:' remove a new note!',
    handler: function(){
        console.log('remove new note!');
    }
});

//create read command
yargs.command({
    command:'read',
    describe:' read a new note!',
    handler: function(){
        console.log('read new note!');
    }
});
//create list command
yargs.command({
    command:'list',
    describe:' list a new note!',
    handler: function(){
        console.log('list new note!');
    }
});
console.log(yargs.argv);

