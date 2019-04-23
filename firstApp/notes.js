const fs = require('fs');
const getNotes = function () {
    return 'your notes...'
}
/**Add Notes**
 * *
 * command: node app.js add --title="Springboot" --body="It is best and easy along career defined."
 * ****/
const addNote = function (title, body) {
    const notes = loadNotes();
    /***Check whether note title exist or Not***/
    const duplicateNote = notes.filter(function (note) {
        return note.title === title;
    });
    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title already taken...!');
    }
}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}
const loadNotes = function () {
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
const removeNote = function(title){
    const notes = loadNotes();
    const newNote = notes.filter(function (note) {
        return note.title !== title;
    });
    saveNotes(newNote);
    console.log('remove the node :',title);
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote
};