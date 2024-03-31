function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

let win = 0;
let lose = 0;
/*^ these two variables will count wins/loses take from playRound function,
    to be compared inside playGame function.*/

function playRound(player, computer) {
//^ the two parameters will get player and computer input.

    player = prompt("choice?").toLocaleLowerCase();
    /*^ this gets player input through a prompt. 
        also turns the player input to lowercase.*/

    computer = getComputerChoice();
    /*^ this gets computer input through the getComputerChoice()
        function.*/

    if (player === computer) {
        return ("its a tie!");
    /*^ if both player and computer inputs are the same, this
      will return the result as a tie.*/
    } else if (player === "rock" && computer === "scissors") {
        win++; /*this adds 1 to the win variable.*/
      //^ compares player and computer input with "rock" and "scissors".
        return ("You Win! Rock beats Scissors.");
        /*^ if player input matches with "rock" and computer input matches
            with "scissors", this will return the result. 
            otherwise keep going. from line 36 to line 50, it contains 
            repetition of the same code with different input comparisons 
            and results.*/
    } else if (player === "paper" && computer === "rock") {
        win++;
        return ("You Win! Paper beats Rock.");
    } else if (player === "scissors" && computer === "paper") {
        win++;
        return ("You Win! Scissors beat Paper");
    } else if (player === "rock" && computer === "paper") {
        lose++; /*this adds 1 to the lose variable.*/
        return ("You lose! Paper beats Rock.");
    } else if (player === "paper" && computer === "scissors") {
        lose++;
        return ("You lose! Scissors beats paper.");
    } else if (player === "scissors" && computer === "rock") {
        lose++;
        return ("You lose! Rock beats Scissors.");
    } else {
        return ("WHAT THE HELL EVEN IS THAT??!!");
               /*^ this returns if the player input is invalid.*/
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        /*^ this loop runs the playRound function 5 times.
            also console.log the results each time.*/
    }
}