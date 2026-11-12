function getComputerChoice() {
    let rand = Math.random()
    console.log(rand)
    if (rand <= 1/2) {
        return "rock"
    } else if (rand > 1/3 && rand <= 2/3) {
        return "paper"
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())


function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors?")
    return choice
}

console.log(getHumanChoice())

function playGame() {
    var humanScore = 0;
    var computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()

        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore += 1;
                console.log("You lose! Paper beats rock.")
            } else if (computerChoice === "scissors") {
                humanScore += 1;
                console.log("You win! Rock beats scissors.")
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                computerScore += 1;
                console.log("You lose! Scissors beats paper.")
            } else if (computerChoice === "rock") {
                humanScore += 1;
                console.log("You win! Paper beats rock.")
            }
        } else {
            if (computerChoice === "rock") {
                computerScore += 1;
                console.log("You lose! Rock beats scissors.")
            } else if (computerChoice === "paper") {
                humanScore += 1;
                console.log("You win! Paper beats rock.")
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }

    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else {
        console.log("You lose the game!")
    }

    console.log("The final score is: " + humanScore + " (you) - " + computerScore + " (computer)")
}

console.log(playGame())