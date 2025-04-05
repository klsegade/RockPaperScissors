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
            let computerScore = 1
            return [null,computerScore]
        }
        else if (computerChoice === 'scissors') {
            console.log('The computer chose scissors. Rock beats scissors, you win!')
            let humanScore = 1
            return [humanScore,null]
        }
        else {
            console.log("You both chose rock! It's a tie!")
            return [null,null]
        }
    }
    else if (userInput === 'paper') {
        if (computerChoice === 'rock') {
            console.log('The computer chose rock. Paper beats rock, you win!')
            let humanScore = 1
            return [humanScore,null]
        }
        else if (computerChoice === 'scissors') {
            console.log('The computer chose scissors. Scissors beats paper, you lose!')
            let computerScore = 1
            return [null,computerScore]
        }
        else {
            console.log("You both chose paper! It's a tie!")
            return [null,null]
        }
    }
    else if (userInput === 'scissors') {
        if (computerChoice === 'paper') {
            console.log('The computer chose paper. Scissors beats paper, you win!')
            let humanScore = 1
            return [humanScore,null]
        }
        else if (computerChoice === 'rock') {
            console.log('The computer chose rock. Rock beats scissors, you lose!')
            let computerScore = 1
            return [null,computerScore]
        }
        else {
            console.log("You both chose scissors! It's a tie!")
            return [null,null]
        }
    }
    else {
        console.log("You didn't enter an appropriate choice!")
    }
}

function playGame() {
    humanScore = 0
    computerScore = 0

    for (let i = 0; i < 5; i++) {  
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();   
        let score = playRound(humanSelection, computerSelection);
        if (!score[0] && !score[1]) {i--}
        humanScore += score[0]
        computerScore += score[1]
        console.log("Your current score is: ", humanScore)
        console.log("The computer's current score is: ", computerScore)
    }
}


