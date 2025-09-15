const instructions = document.querySelector('.instructions');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const choices = document.querySelector('.choices');
const computer = document.querySelector('.computer');

const rockImage = document.createElement('img');
rockImage.src = "./images/rock50.png";
const paperImage = document.createElement('img');
paperImage.src = "./images/paper50.png";
const scissorsImage = document.createElement('img');
scissorsImage.src = "./images/scissors50.png";

function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);
  switch (x) {
    case 0:
        computer.appendChild(rockImage);
        return 'rock';
    case 1:
        computer.appendChild(paperImage);
        return 'paper';
    case 2:
        computer.appendChild(scissorsImage);
        return 'scissors'
  }
}

function getHumanChoice() {
    // instructions.textContent = 'Choose rock, paper, or scissors';
    choices.addEventListener('click', function(e) {
        switch (e.target) {
            case rock:
                if (computer.children.length > 1) {
                    computer.removeChild(computer.lastChild)
                }
                humanChoice = 'rock';
                computerChoice = getComputerChoice();
                instructions.textContent = '';
                playRound(humanChoice,computerChoice);
                break;
            case paper:
                if (computer.children.length > 1) {
                    computer.removeChild(computer.lastChild)
                }
                humanChoice = 'paper';
                computerChoice = getComputerChoice();
                instructions.textContent = '';
                playRound(humanChoice,computerChoice);
                break;
            case scissors:
                if (computer.children.length > 1) {
                    computer.removeChild(computer.lastChild)
                }
                humanChoice = 'scissors';
                computerChoice = getComputerChoice();
                instructions.textContent = '';
                playRound(humanChoice,computerChoice);
                break;
        }
    }, {once: true})
}

function scoreChecker() {
    humanScoreTracker.textContent = humanScore;
    robotScoreTracker.textContent = computerScore;
    
    if (humanScore < 5 && computerScore < 5) {
        getHumanChoice();
    } else if (humanScore === 5) {
        instructions.textContent = 'Game over. YOU WIN!';
    } else if (computerScore === 5) {
        instructions.textContent = 'Game over. YOU LOSE!';
    } 
}

function playRound(humanChoice,computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice && humanChoice !== undefined) {
        instructions.textContent = "It's a draw!";
        scoreChecker();
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            instructions.textContent = 'You lose! Paper beats rock.';
            computerScore += 1;
            scoreChecker();
        } else if (computerChoice === 'scissors') {
            instructions.textContent = 'You win! Rock beats scissors.';
            humanScore += 1;
            scoreChecker();
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            instructions.textContent = 'You lose! Scissors beats paper.';
            computerScore += 1;
            scoreChecker();
        } else if (computerChoice === 'rock') {
            instructions.textContent = 'You win! Paper beats rock.';
            humanScore += 1;
            scoreChecker();
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            instructions.textContent = 'You lose! Rock beats scissors.';
            computerScore += 1;
            scoreChecker();
        } else if (computerChoice === 'paper') {
            instructions.textContent = 'You win! Scissors beats paper.';
            humanScore += 1;
            scoreChecker();
        }
    }
}


let humanScore = 0;
let computerScore = 0;

const humanScoreTracker = document.querySelector('.humanScore');
const robotScoreTracker = document.querySelector('.robotScore');


let computerChoice;
let humanChoice;


scoreChecker();



