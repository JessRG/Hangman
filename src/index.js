import Hangman from './hangman' // hangman.js
import getPuzzle from './requests' // request.js


const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game.statusMessage

    const word = game.puzzle.split('')
    word.forEach((letter) => {
        const spanEl = document.createElement('span')
        spanEl.textContent = letter
        puzzleEl.appendChild(spanEl)
    })
}


const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()