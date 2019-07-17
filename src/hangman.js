class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')// word instance property array of lowercase letters
        this.guessedLetters = [] // guesses
        this.remainingGuesses = remainingGuesses
        this.status = 'playing'
    }
    calculateStatus() {
        const solved = !this.puzzle.includes('*')
        // const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (this.remainingGuesses > 0 && solved) { //finished
            this.status = 'finished'
        } else {
            this.status = "playing"
        }
    }
    get statusMessage() {
        let msg = `Guesses left: ${this.remainingGuesses}`
        const finished = this.status === 'finished'
        const failed = this.status === 'failed'
        if (finished || failed) {
            msg = finished ? 'Great work! You guessed the word.' : `Nice try! The word was \"${this.word.join('')}\"`
        }
        return msg
    }
    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            const flag = this.guessedLetters.includes(letter) || letter === ' '
            flag ? puzzle += letter : puzzle += '*'
        })

        return puzzle
    }
    makeGuess(guess) {
        if (this.status !== 'playing') {
            return
        }
        const newLetter = guess.toLowerCase() // able to do this by autoboxing
        const isUnique = !this.guessedLetters.includes(newLetter)
        if (isUnique) {
            const isGoodGuess = this.word.includes(newLetter)
            //isGoodGuess ? this.guessedLetters.push(newLetter) : this.remainingGuesses--
            isGoodGuess ? this.guessedLetters = [...this.guessedLetters, newLetter] : this.remainingGuesses--
        }
        this.calculateStatus()
    }
}

export { Hangman as default }