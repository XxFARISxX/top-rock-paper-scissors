function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

const results = ["its a tie!", "You Win!", "You Lose!", "WHAT THE HELL EVEN IS THAT??!!"];
/*^ this array stores the result strings that will return after playRound
    function is executed.*/

function playRound(player, computer) {
//^ the two parameters will get player and computer input.

    player = prompt("choice?").toLocaleLowerCase();
    /*^ this gets player input through a prompt. 
        also turns the player input to lowercase.*/

    computer = getComputerChoice();
    /*^ this gets computer input through the getComputerChoice()
        function.*/

    if (player === computer) {
        return (results[0]/*this returns tie string from results array.*/);
    /*^ if both player and computer inputs are the same, this
      will return the result as a tie.*/
    } else if (player === "rock" && computer === "scissors") {
      //^ compares player and computer input with "rock" and "scissors".
        return (results[1]/*this returns win string from results array.*/ + " Rock beats Scissors.");
        /*^ if player input matches with "rock" and computer input matches
            with "scissors", this will return the result. 
            otherwise keep going. from line 34 to line 47, it contains 
            repetition of the same code with different input comparisons 
            and results.*/
    } else if (player === "paper" && computer === "rock") {
        return (results[1] + " Paper beats Rock.");
    } else if (player === "scissors" && computer === "paper") {
        return (results[1] + " Scissors beat Paper"
                /*^ "You Win/Lose!" and "blank beats blank." are 
                    separate strings, because "You Win/Lose!" will later
                    be used to count wins and loses. 
                    thats the idea at least.*/);
    } else if (player === "rock" && computer === "paper") {
        return (results[2]/*this returns lose string from results array.*/ + " Paper beats Rock.");
    } else if (player === "paper" && computer === "scissors") {
        return (results[2] + " Scissors beats paper.");
    } else if (player === "scissors" && computer === "rock") {
        return (results[2] + " Rock beats Scissors.");
    } else {
        return (results[3]/*this returns the string from results array when player input is invalid.*/);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}