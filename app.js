const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')

// Creat add command.
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note content',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create a remove command.
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }  
  },
  handler: function (argv) {
    notes.removeNote(argv.title)
  }
})

// Create a list command.
yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler: function () {
    console.log('listing all the notes!')
  }
})

//Create a read command.
yargs.command({
  command: 'read',
  describe: 'Read the notes',
  handler: function () {
    console.log('reading the notes!')
  }
})

// add, remove, read, list notes.

yargs.parse()
