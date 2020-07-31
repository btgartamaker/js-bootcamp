class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.status = 'playing'
        this.guessedLetters = []
    }
    get puzzle() {
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
    makeGuess(guess){
        if (this.status === 'playing') {
            guess = guess.toLowerCase()
            const isUnique = this.guessedLetters.indexOf(guess) === -1
            const isBadGuess = this.word.indexOf(guess) === -1
            if (isUnique) {
                this.guessedLetters.push(guess)
            }
    
            if (isUnique && isBadGuess) {
                this.remainingGuesses--
            }
    
            this.calculateStatus()
        }
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
    
    
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        }else {
            this.status = 'playing'
        }
    }
     get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice Try! The word was "${this.word.join('')}".`
        } else if (this.status === 'finished') {
            return 'Great work! You guessed the word.'
        } else {
    
        }
    }
}


