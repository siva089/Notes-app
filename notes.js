const fs = require("fs");
const chalk=require('chalk')


const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
const saveNotes = function(notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};
const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes=notes.filter((note)=>{
      return note.title===title
  })
  if(duplicateNotes.length===0){
      notes.push({
          title: title,
          body: body
      });
      saveNotes(notes);
  }
  else{
      console.log("Title already taken")
  }
 
};
const removeNotes=function(title){
const notes=loadNotes();
const notesToKeep=notes.filter((note)=>{

    return note.title!==title
})
if(notes.length===notesToKeep.length){
console.log(chalk.red("No note removed"))
}
else{
console.log(chalk.green('Note removed'))
}

saveNotes(notesToKeep);

}
const listNotes=()=>{
const notes=loadNotes();
console.log(chalk.inverse('your notes'));
notes.forEach((note)=>{
    console.log(note.title)
})

return notes

}
const readNotes=(title)=>{
const notes=loadNotes();
let findNote=notes.find((note)=>{
  return note.title===title;
})
if(findNote){
    console.log(findNote.body)
}
}
module.exports = {

  removeNotes:removeNotes,
  addNote: addNote,
  listNotes:listNotes,
  readNotes:readNotes

};
