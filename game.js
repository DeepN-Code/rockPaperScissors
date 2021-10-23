function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
    console.log(arr[Math.floor(Math.random() * arr.length)]);
}

function playerInput() {
    let inp = prompt("Enter your choice (Rock, Paper or Scissors): ").toLowerCase();
    if (inp == "rock" || inp == "paper" || inp == "scissors") {
        console.log(inp);
        return inp;
    }
    else {
        alert("Enter valid input!!!")
    }

}

/*
let playerSelection = playerInput();
let computerSelection = computerPlay();
playerSelection, computerSelection
*/

function playRound() {
    let playerSelection = playerInput();
    let computerSelection = computerPlay();

    const r1 = "It's a tie!";
    const r2 = "You lost! Paper beats Rock.";
    const r3 = "You won! Rock beats Scissors.";
    const r4 = "You won! Paper beats Rock.";
    const r5 = "You lost! Scissors beats Paper.";
    const r6 = "You lost! Rock beats Scissors.";
    const r7 = "You won! Scissors beats Paper.";

    if (playerSelection == computerSelection) {
        console.log(r1);
        return r1;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log(r2);
        return r2;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log(r3);
        return r3;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(r4);
        return r4;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log(r5);
        return r5;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log(r6);
        return r6;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(r7);
        return r7;
    }
}

function game() {
    let playerWin = 0;
    let computerWin = 0;

    for (let i = 0; i < 5; i++) {
        let output = playRound();

        if (output.search('won') >= 0) {
            playerWin++;
            console.log(`${output} Score: ${playerWin} - ${computerWin}`);
        }
        else if (output.search('lost') >= 0) {
            computerWin++;
            console.log(`${output} Score: ${playerWin} - ${computerWin}`);
        }
        else {
            console.log(`${output} Score: ${playerWin} - ${computerWin}`);
        }
    }

    if (computerWin > playerWin) {
        console.log(`LOSER!!! Score: ${playerWin} - ${computerWin}`);
    }
    else if (playerWin > computerWin) {
        console.log(`WINNER!!! Score: ${playerWin} - ${computerWin}`);
    }
    else {
        console.log(`DRAW!!! Score: ${playerWin} - ${computerWin}`);
    }
}