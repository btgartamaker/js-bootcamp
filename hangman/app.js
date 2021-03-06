const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
console.log(game1.status)
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
    console.log(game1.status)
})

getPuzzle('2').then((data) => {
    console.log(data.puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})



const countryCode = 'MX'

getCountry(countryCode).then((country) => {
    console.log(`Country Name: ${country.name}`)
}, (err) => {
    console.log(`Error: ${err}`)
})


