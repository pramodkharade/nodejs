const fs = require('fs');
const getNotes = function(){
    return 'your notes...'
}

const addNote = function(title,body){
const notes = loadNotes();
/***Check whether note title exist or Not***/
const duplicateNote = notes.filter(function(note){
    return note.title === title;
});
    if(duplicateNote.length===0){
      notes.push({
        title:title,
        body:body
      });        
        saveNotes(notes);
        console.log('New note added!');
    }else{
        console.log('Note title already taken...!');
    }
}
const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch(e){
        return [];
    }
}
module.exports = {
    getNotes:getNotes,
    addNote: addNote
};