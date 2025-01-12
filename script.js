let round = 1;
let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);

    if (randNum == 0)
        return "rock";
    else if (randNum == 1)
        return "paper";
    else if (randNum == 2)
        return "scissors";
}

function getHumanChoice() 
{

    let flag = true;

    do 
    {
        let input = prompt("Round " + round + " - What's your choice (Rock/Paper/Scissors): ").toLowerCase();

        if (input == "rock" || input == "paper" || input == "scissors")
        {
            round++;
            return input;
        }
        else
            flag = false;
    }
    while (!flag);

}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice)
        console.log("It's a tie! " + humanChoice + " doesn't beat " + computerChoice);
    else if (humanChoice == "rock" && computerChoice == "paper")
    {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors")
    {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors")
    {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock")
    {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock")
    {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper")
    {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
}

function playGame()
{

    for (let i = 1; i <= 5; i++)
    {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore)
        alert("You win the game!");
    else if (humanScore === computerScore)
        alert("Game is tied, well played!");
    else
        alert("You lose the game!");

}


