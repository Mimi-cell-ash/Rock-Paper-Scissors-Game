const choiceBtns = document.querySelectorAll('.choice');
const resetBtn = document.getElementById('reset-btn');

const userScoreBoard = document.getElementById('user-score');
const computerScoreBoard = document.getElementById('computer-score');
const messageDisplay = document.querySelector('.choice-user');
const choiceDetails = document.querySelector('.choice-details');

let userScore = 0;
let computerScore = 0;

const choices = ['🪨 Rock', '📄 Paper', '✂️ Scissors'];

choiceBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    const userChoice = btn.textContent.trim();
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let outcome = '';

    if (userChoice === computerChoice) {
      outcome = 'draw';

    } else if (
      (userChoice === '🪨 Rock' && computerChoice === '✂️ Scissors') ||
      (userChoice === '📄 Paper' && computerChoice === '🪨 Rock') ||
      (userChoice === '✂️ Scissors' && computerChoice === '📄 Paper')
    ) {
      outcome = 'win';

    } else {
      outcome = 'lose';
    }

    if (outcome === 'win') {
      userScore++;
    }

    if (outcome === 'lose') {
      computerScore++;
    }

    userScoreBoard.textContent = userScore;
    computerScoreBoard.textContent = computerScore;

    messageDisplay.className = 'choice-user';

    if (outcome === 'win') {
      messageDisplay.textContent = 'You Win! 🎉';
      messageDisplay.classList.add('win');

    } else if (outcome === 'lose') {
      messageDisplay.textContent = 'You Lose! 😢';
      messageDisplay.classList.add('lose');

    } else {
      messageDisplay.textContent = "It's a Draw 🤝";
      messageDisplay.classList.add('draw');
    }

    choiceDetails.innerHTML = `
      You chose <span>${userChoice}</span>
      — Computer chose <span>${computerChoice}</span>
    `;
  });
});

resetBtn.addEventListener('click', () => {
 
  userScore = 0;
  computerScore = 0;

  
  userScoreBoard.textContent = 0;
  computerScoreBoard.textContent = 0;


  messageDisplay.textContent = 'Make your choice!';
  messageDisplay.className = 'choice-user';

  choiceDetails.textContent = '';
});