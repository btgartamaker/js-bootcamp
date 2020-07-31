const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.indexOf(letter) > -1 || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()
    const isUnique = this.guessedLetters.indexOf(guess) === -1
    const isBadGuess = this.word.indexOf(guess) === -1

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
}

const game1 = new Hangman('Cat', 2)
game1.makeGuess('c')
game1.makeGuess('t')
game1.makeGuess('z')

const game2 = new Hangman('New Jersey', 4)
game2.makeGuess('w')

console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)
console.log(game2.getPuzzle())
console.log(game2.remainingGuesses)
