console.log("Hello World!");

function getComputerChoice() 
{
    let randNum = Math.floor(Math.random() * 3);

    if (randNum == 0)
        return "rock";
    else if (randNum == 1)
        return "paper";
    else if (randNum == 2)
        return "scissors";
}

console.log(getComputerChoice());