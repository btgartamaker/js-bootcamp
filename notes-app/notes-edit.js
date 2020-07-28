const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const timeSpanElement = document.querySelector('#last-edited')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()

let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

// Set default values
titleElement.value = note.title
timeSpanElement.textContent = generateLastUpdated(note.updatedAt)
bodyElement.value = note.body

// Update Title
titleElement.addEventListener('input', function(e) {
    note.updatedAt = moment().valueOf()
    timeSpanElement.textContent = generateLastUpdated(note.updatedAt)
    note.title = e.target.value
    saveNotes(notes)
})

// Update Body
bodyElement.addEventListener('input', function(e) {
    note.updatedAt = moment().valueOf()
    timeSpanElement.textContent = generateLastUpdated(note.updatedAt)
    note.body = e.target.value
    saveNotes(notes)
})

//Remove note
removeElement.addEventListener('click', function() {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteId
        })
        
        if (note === undefined) {
            location.assign('/index.html')
        }
    }

    titleElement.value = note.title
    bodyElement.value = note.body
    timeSpanElement.textContent = generateLastUpdated(note.updatedAt)
})