import $ from './Selector';
import { min, max, winningNum } from './GameValues';
import showAlert from './Alert';

let guessesLeft = 3;

// Selecting all elems
const guessInput = $('#guess-input'),
  minNum = $('#min-num'),
  maxNum = $('#max-num'),
  guessBtn = $('#guess-btn'),
  message = $('p.help'),
  game = $('#game'),
  gameForm = $('#game-form');

// Max and min value
maxNum.text(max);
minNum.text(min);

// Adding event to button
gameForm.on('submit', processInput);
// Adding event to play again with event delegation
game.on('mousedown', restartGame);

// Defining the function
function processInput(e) {
  // Prevent default behaviour
  e.preventDefault();
  // Guess input value
  const val = parseInt(guessInput.val());
  // Validating input
  if (
    !guessInput.value_is_int() ||
    val > max ||
    val < min ||
    guessInput.value_is_empty()
  ) {
    showAlert(`Please enter a number between ${min} and ${max}`, 'is-danger');
    return false;
  }
  // Getting the guess input value
  if (val === winningNum) {
    gameOver(true, `${winningNum} is correct! YOU WON`);
  } else {
    // Decreasing guess left
    guessesLeft--;
    if (guessesLeft === 0) {
      // Game over
      gameOver(false, `Game over! correct number was ${winningNum}`);
    } else {
      // Game continues
      gameOver(false, `Wrong guess! ${guessesLeft} guesses left`);
    }
  }
}

// Function for game over
function gameOver(won, msg) {
  let addClass, removeClass;
  // Checking the won status
  if (won) {
    addClass = 'is-success';
    removeClass = 'is-danger';
  } else {
    addClass = 'is-danger';
    removeClass = 'is-success';
  }

  // Adding and removing class to input and message
  guessInput.addClass(addClass).removeClass(removeClass);
  message
    .removeClass(removeClass)
    .addClass(addClass)
    .text(msg);

  if (won || guessesLeft === 0) {
    // alert
    showAlert(msg, addClass);

    guessBtn.addClass('play-again');
    guessBtn.text('Play again');
  }
}

// Define the restart game func
function restartGame(e) {
  if (e.target.classList.contains('play-again')) {
    // Reset the form
    gameForm.reset();
    // Remove form submit event
    gameForm.removeEvent('submit', processInput, false);
    // Reload the window
    window.location.reload();
  }
}
