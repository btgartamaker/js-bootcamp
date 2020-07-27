const notes = [{
    title: 'My next trip',
    body: 'I would like to go to india'
}, {
    title: 'Habbits to work on',
    body: 'coding'
}, {
    title: 'Office Mods',
    body: 'get a standing desk'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if ( a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
        
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}


sortNotes(notes)
console.log(notes)

// console.log(findNotes(notes, 'work'))
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'office mods')
// console.log(note)

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.tile === 'Habbits to work on'
// })

// console.log(index)

