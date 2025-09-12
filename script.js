function getComputerChoice() {
    x = Math.random()*100;
    if (x <= 100/3) {
        return 'rock';
    } else if (x > 100/3 && x <= 200/3) {
        return 'paper';
    } else if (x > 200/3) {
        return 'scissors';
    }
}

function getHumanChoice() {
    return prompt('Choose Rock, Paper, or Scissors.').toLowerCase()
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log('You lose! Paper beats rock.');
            computerScore += 1;
        } else if (computerChoice === 'scissors') {
            console.log('You win! Rock beats scissors.');
            humanScore += 1;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            console.log('You lose! Scissors beats paper.');
            computerScore += 1;
        } else if (computerChoice === 'rock') {
            console.log('You win! Paper beats rock.');
            humanScore += 1;
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log('You lose! Rock beats scissors.');
            computerScore += 1;
        } else if (computerChoice === 'paper') {
            console.log('You win! Scissors beats paper.');
            humanScore += 1;
        }
    }
}


while (humanScore < 5 && computerScore < 5) {
    console.log(`The score is \nYou: ${humanScore}\nComputer: ${computerScore}`)
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();
    playRound(humanChoice,computerChoice);
}

if (humanScore == 5) {
    console.log('Gameover. You win!');
} else if (computerScore == 5) {
    console.log('Gameover. You lose!')
}