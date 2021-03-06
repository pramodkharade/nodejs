const fs = require('fs');
const chalk = require('chalk');
/**Add Notes**
 * *
 * command: node app.js add --title="Springboot" --body="It is best and easy along career defined."
 * ****/
const addNote = (title, body)=> {
    const notes = loadNotes();
    /***Check whether note title exist or Not***/
    const duplicateNotes = notes.filter( (note)=> {
        return note.title === title;
    });
    const duplicateNote = notes.find( (note)=> note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added: ',title));
    } else {
        console.log(chalk.red.inverse('Note title already taken: ',title));
    }
}

const saveNotes = (notes)=> {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}
const loadNotes = ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch (e) {
        return [];
    }
}
/***Remove item from array
 * Comand: node app.js remove --title="NodeJs1"
 * 
 * ***/
const removeNote = (title)=>{
    const notes = loadNotes();
    const newNote = notes.filter((note)=>{
        return note.title !== title;
    });
    if(notes.length > newNote.length){
        saveNotes(newNote);
        console.log(chalk.green.inverse('Note removed',title));
    }else{
        console.log(chalk.red.inverse('No note found:',title));
    }
    console.log('remove the node :',title);
}
/****List the all notes****/
const getListNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.green.inverse('Your notes are :'));
    notes.forEach((note) => {
        console.log(note.title);
    });
}

/****Read notes by title**
 * 
 * command: node app.js read --title="Springboot1"
 * ***/
const readnote = (title)=>{
    const notes = loadNotes();
    const note = notes.find( (note)=> note.title === title);
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse('Note is not found!'));
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    getListNotes:getListNotes,
    readnote:readnote
};