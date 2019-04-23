const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

const command = process.argv[2];
//create add command
yargs.command({
    command:'add',
    describe:' Add a new note!',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true ,// to make required
            type:'string'
        },
        body:{
            describe:'Note description',
            demandOption:true ,// to make required
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
    }
});

//create remove command
yargs.command({
    command:'remove',
    describe:' remove a new note!',
    builder:{
        title :{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
});

//create read command
yargs.command({
    command:'read',
    describe:' read a new note!',
    builder:{
        title :{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.readnote(argv.title);
    }
});
//create list command
yargs.command({
    command:'list',
    describe:' list a new notes!',
    handler: function(){
        notes.getListNotes();
    }
});
yargs.parse();

