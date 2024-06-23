function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}
let gameCount = 0;
let win = 0;
let lose = 0;
let tie = 0
/*^ these four variables will count wins, loses, ties, and number of games played, 
    taken from playRound function, to be compared inside playGame function.*/

function updateScore() {
    const score = document.querySelector("#score").textContent = `Games Played: ${gameCount}\nPlayer: ${win}\nComputer: ${lose}\nTies: ${tie}`;
};//^ this displays the score in the div on the page. gets updated with every playRound call.

function playRound(player, computer) {
//^ the two parameters will get player and computer input.
    //player = getComputerChoice();
    gameCount++;
    computer = getComputerChoice();
    /*^ this gets computer input through the getComputerChoice()
        function.*/

    if (player === computer) {
        tie++; //< this adds 1 to the tie variable
        updateScore()//<sends updates. read comment below the the score function.
        return ("its a tie!");
    /*^ if both player and computer inputs are the same, this
      will return the result as a tie.*/
    } else if (player === "rock" && computer === "scissors") {
      //^ compares player and computer input with "rock" and "scissors".
        win++; /*<this adds 1 to the win variable.*/
        updateScore()
        return ("You Win! Rock beats Scissors.");
        /*^ if player input matches with "rock" and computer input matches
            with "scissors", this will return the result. 
            otherwise keep going. from line 41 to line 61, it contains 
            repetition of the same code with different input comparisons 
            and results.*/
    } else if (player === "paper" && computer === "rock") {
        win++;
        updateScore()
        return ("You Win! Paper beats Rock.");
    } else if (player === "scissors" && computer === "paper") {
        win++;
        updateScore()
        return ("You Win! Scissors beat Paper");
    } else if (player === "rock" && computer === "paper") {
        lose++; /*this adds 1 to the lose variable.*/
        updateScore()
        return ("You lose! Paper beats Rock.");
    } else if (player === "paper" && computer === "scissors") {
        lose++;
        updateScore()
        return ("You lose! Scissors beats paper.");
    } else if (player === "scissors" && computer === "rock") {
        lose++;
        updateScore()
        return ("You lose! Rock beats Scissors.");
    };
}

function finalResults() {
    if (gameCount === 5) {
        if (win > lose) {
            alert("!!!You Won the Game!!!");
        } else if (lose > win) {
            alert("!!!You Lost the Game!!!");
        } else if (win === lose) {
            alert("!!!Its a Tie!!!");
        }; /*^ this counts the total win, lose, and tie results of 5 playRound runs,
               and compares them to get the final results.*/
        gameCount = 0;
        win = 0;
        lose = 0;
        tie = 0;
        //^ these will reset the count.
        updateScore();
        //^ will update the score.
    };
};

const roundResults = document.querySelector("#roundResults");

const rock = document.querySelector("#rock").addEventListener("click", () => {
    roundResults.textContent = playRound("rock");
    finalResults();
});
const paper = document.querySelector("#paper").addEventListener("click", () => {
    roundResults.textContent = playRound("paper");
    finalResults();
});
const scissors = document.querySelector("#scissors").addEventListener("click", () => {
    roundResults.textContent = playRound("scissors");
    finalResults();
});
    /*^these buttons will play a round with the choice thats assigned to them.
       then display the results inside the roundResults div*/