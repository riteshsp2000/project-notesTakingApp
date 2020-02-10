const fs = require('fs')
const chalk = require('chalk');

const getNotes = function () {
  return 'Your Notes...';
}

// <============================= Add Note =============================>
const addNote = function (title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log('New note added!')
  } else {
    console.log('Note Title taken!')
  }
    
}

// <============================= Remove Note =============================>
const removeNote = function (title) {
  const notes = loadNotes()
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title
  })
  saveNotes(notesToKeep)

  if (notesToKeep.length < notes.length) {
      console.log(chalk.bgGreen('The note was removed'))  
  } else {
      console.log(chalk.bgRed(`The title named ${title} does not exist.`))
  }
}

// <============================= List Note =============================>
const listNote = function (title) {
  const notes = loadNotes()
  notes.forEach({
    console.log()
  })
}


// <============================= Global Functions =============================>

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
  try {
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
  } catch (e) {
      return []
  }
}



module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}