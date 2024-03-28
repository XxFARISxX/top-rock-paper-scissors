function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(player, computer) {
//^ the two parameters will get player and computer input.
    player = player.toLowerCase();
    //^ this turns the player input to lowercase.

    if (player === computer) {
        return ("its a tie!");
    /*^ if both player and computer inputs are the same, this
      will return the result as a tie. */
    } else if (player === "rock" && computer === "scissors") {
      //^ compares player and computer input with "rock" and "scissors".
        return ("You Win! Rock beats Scissors.");
        /*^ if player input matches with "rock" and computer input matches
            with "scissors", this will return the result. 
            otherwise keep going. from line 24 to line 33, it contains 
            repetition of the same code with different input comparisons 
            and results. */
    } else if (player === "paper" && computer === "rock") {
        return ("You Win! Paper beats Rock.");
    } else if (player === "scissors" && computer === "paper") {
        return ("You Win! Scissors beat Paper");
    } else if (player === "rock" && computer === "paper") {
        return ("You Lose! Paper beats Rock.");
    } else if (player === "paper" && computer === "scissors") {
        return ("You Lose! Scissors beats paper.");
    } else if (player === "scissors" && computer === "rock") {
        return ("You Lose! Rock beats Scissors.");
    } else {
        return ("WHAT THE HELL EVEN IS THAT??!!");
        /*^ if player input is something other then "rock", "paper"
            or "scissors", this will return*/
    }
}