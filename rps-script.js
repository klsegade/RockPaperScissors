function getComputerChoice() {
    x = Math.random()
    let compChoice = (x < 1/3) ? 'rock':
        (x < 2/3) ? 'paper':
        'scissors';
    return compChoice   
}

function getHumanChoice()   {
    let humChoice = prompt('Enter either "Rock", "Paper", or "Scissors":')
    return humChoice
}

function playRound(humanChoice,computerChoice) {
    userInput = humanChoice.toLowerCase();
    if (userInput === 'rock') {
        if (computerChoice === 'paper') {
            console.log('The computer chose paper. Paper beats rock, you lose!')
            computerScore++
        }
        else if (computerChoice === 'scissors') {
            console.log('The computer chose scissors. Rock beats scissors, you win!')
            humanScore++
        }
        else {
            console.log("You both chose rock! It's a tie!")
        }
    }
    else if (userInput === 'paper') {
        if (computerChoice === 'rock') {
            console.log('The computer chose rock. Paper beats rock, you win!')
            humanScore++
        }
        else if (computerChoice === 'scissors') {
            console.log('The computer chose scissors. Scissors beats paper, you lose!')
            computerScore++
        }
        else {
            console.log("You both chose paper! It's a tie!")
        }
    }
    else if (userInput === 'scissors') {
        if (computerChoice === 'paper') {
            console.log('The computer chose paper. Scissors beats paper, you win!')
            humanScore++
        }
        else if (computerChoice === 'rock') {
            console.log('The computer chose rock. Rock beats scissors, you lose!')
            computerScore++
        }
        else {
            console.log("You both chose scissors! It's a tie!")
        }
    }
    else {
        console.log("You didn't enter an appropriate choice!")
    }
}

function playGame() {
    humanScore = 0
    computerScore = 0

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    for (let i = 0; i < 3; i++) {     
    playRound(humanSelection, computerSelection);
    }
}


