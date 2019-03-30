const yargs=require("yargs");
const notes=require("./notes")

yargs.command({
    command:'add',
    describe:'Adding a note',
    builder:{
    title:{
        demandOption: true,
        type: 'string'
    },
    body:{
        demandOption:true,
        type:'string'
    }
},
    handler:function(argv){
       notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder:{
        title:{
            type:'string',
            demandOption:true
        }
    },
    handler: function (argv) {
      notes.removeNotes(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'reading a note',
    title:{
        demandOption:true,
        type:'string'
    },
    handler: function (argv) {
      notes.readNotes(argv.title)
    }
})
yargs.parse()