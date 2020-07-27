const notes = getSavedNotes()

const filters = {
    searchText: ''
}


renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function () {
    notes.push({
        title: '',
        body: ''
    })
    getSavedNotes(notes)
    renderNotes(notes, filters)
})


document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {

})

// // const p = document.querySelector('p')
// // p.remove()

// const ps = document.querySelectorAll('p')

// ps.forEach(function(p) {
//     p.textContent = '************'
//     // console.log(p.textContent)
// })

// const newParagrah = document.createElement('p')

// newParagrah.textContent = ' This is a new element'
// document.querySelector('body').appendChild(newParagrah)
