const fs = require('fs');
const chalk = require('chalk');
const getNotes = function () {
    return 'your notes...'
}
/**Add Notes**
 * *
 * command: node app.js add --title="Springboot" --body="It is best and easy along career defined."
 * ****/
const addNote = (title, body)=> {
    const notes = loadNotes();
    /***Check whether note title exist or Not***/
    const duplicateNote = notes.filter( (note)=> {
        return note.title === title;
    });
    if (duplicateNote.length === 0) {
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
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote
};