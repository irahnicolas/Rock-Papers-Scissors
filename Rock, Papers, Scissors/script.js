
/*  --------------------------- declaring variables  ---------------------------  */

const computerScore = document.getElementById("computerScore");
const playerScore = document.getElementById("playerScore");
const computerResult = document.getElementById("computerResult");
const playerResult = document.getElementById("playerResult");
const result = document.getElementById("results");
const resetButton = document.getElementById("resetButton");

const rockButton = document.getElementById("rock-background");
const paperButton = document.getElementById("paper-background");
const scissorsButton = document.getElementById("scissors-background");

/* ---------------------------  computer choice: randomly generated  -------------------------  */
function randomGenerator() {
    const randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0)
        return "rock";
    if (randomNumber === 1)
        return "paper";
    if (randomNumber === 2)
        return "scissors";
}

/* ---------------------------  user choice ---------------------------  */ 
function chooseRock() { return "rock" }
function choosePaper() { return "paper";}
function chooseScissors() {return "scissors";}

/* --------------------------- clicking on rockButton --------------------------- */

rockButton.addEventListener("click", () => {
    const playerChoice = chooseRock();
    const computerChoice = randomGenerator();
    const gameOutcome = determineOutcome(playerChoice, computerChoice);
    updateResults(playerChoice, computerChoice, gameOutcome);
});

/* --------------------------- clicking on paperButton --------------------------- */

paperButton.addEventListener("click", () => {
    const playerChoice = choosePaper();
    const computerChoice = randomGenerator();
    const gameOutcome = determineOutcome(playerChoice, computerChoice);
    updateResults(playerChoice, computerChoice, gameOutcome);
});

/* --------------------------- clicking on scissorsButton --------------------------- */

scissorsButton.addEventListener("click", () => {
    const playerChoice = chooseScissors();
    const computerChoice = randomGenerator();
    const gameOutcome = determineOutcome(playerChoice, computerChoice);
    updateResults(playerChoice, computerChoice, gameOutcome);
});


/* --------------------------- determining outcome --------------------------- */

function determineOutcome(playerChoice, computerChoice) {
    if (playerChoice === "rock") {

        if (computerChoice === "rock") {
            return "It's a tie";
        }
        if (computerChoice === "paper") {
            return "Computer wins";
        }
        if (computerChoice === "scissors"){
            return "Player wins";
        }

    }
    if (playerChoice === "paper") {

        if (computerChoice === "rock"){
            return "Player wins";
        }
        if (computerChoice === "paper"){
            return "It's a tie";
        }
        if (computerChoice === "scissors"){
            return "Computer wins";
        }
    }

    if (playerChoice === "scissors") {

        if (computerChoice === "rock"){
            return "Computer wins";
        }
        if (computerChoice === "paper"){
            return "Player wins";
        }
        if (computerChoice === "scissors"){
            return "It's a tie";
        }
    }

    return "invalid choices"
}


/*  ------------------  player scoreboard: updating results function  -------------------  */

function updateResults(playerChoice, computerChoice, gameOutcome) {
   
    if (gameOutcome === "Player wins") {
        playerScore.textContent = `Player: ${parseInt(playerScore.textContent.split(": ")[1]) + 1}`;
        result.textContent = `You win!`; 
    }   else if (gameOutcome === "Computer wins") {
        computerScore.textContent = `Computer: ${parseInt(computerScore.textContent.split(": ")[1]) + 1}`;
        result.textContent = `You lose!`;
    }   else {
        result.textContent = `It's a tie!`;
        playerScore.textContent = `Player: ${parseInt(playerScore.textContent.split(": ")[1]) + 1}`;
        computerScore.textContent = `Computer: ${parseInt(computerScore.textContent.split(": ")[1]) + 1}`;

    }

    playerResult.textContent = `Player : ${playerChoice}`;
    computerResult.textContent = `Computer : ${computerChoice}`;
    if (playerChoice === "paper") {
        playerResult.textContent = `Player chose : Paper`;
    } else if (playerChoice === "rock") {
        playerResult.textContent = `Player chose : Rock`;
    } else if (playerChoice === "scissors"){
        playerResult.textContent = `Player chose : Scissors`;
    }
    if (computerChoice === "paper") {
        computerResult.textContent = `Computer chose : Paper`;
    } else if (computerChoice === "rock") {
        computerResult.textContent = `Computer chose : Rock`;
    } else if (computerChoice === "scissors"){
        computerResult.textContent = `Computer chose : Scissors`;
    }
}


/* --------------------------- clicking on resetButton --------------------------- */

/*------------------------- reset scoreboard & start a new game------------------------- */


resetButton.addEventListener("click", () => {

    playerScore.textContent = `Player: 0`;
    computerScore.textContent = `Computer: 0`;
    playerResult.textContent = `Player:`;
    computerResult.textContent = `Computer:`;
    result.textContent = ``;

});


