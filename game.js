let playerSelection;
let computerSelection;
let playerWin=0;
let computerWin=0;

function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
    console.log(arr[Math.floor(Math.random() * arr.length)]);
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        declareResult(`Draw! Score: ${playerWin} - ${computerWin}`);
        console.log(`Draw! Score: ${playerWin} - ${computerWin}`);
    }
    else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        computerWin++;
        declareResult(`Round Lost! ${computerSelection} beats ${playerSelection}. Score: ${playerWin} - ${computerWin}`);
        console.log(`Round Lost! ${computerSelection} beats ${playerSelection}. Score: ${playerWin} - ${computerWin}`);
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerWin++;
        declareResult(`Round Won! ${playerSelection} beats ${computerSelection}. Score: ${playerWin} - ${computerWin}`);
        console.log(`Round Won! ${playerSelection} beats ${computerSelection}. Score: ${playerWin} - ${computerWin}`);
    }
    
}

const div = document.querySelector('.result');

function declareResult(string){
    
    const result= document.createElement("p");
    result.textContent= string;
    div.appendChild(result);

}

const outcome= document.querySelector(".outcome");

function declareWinner(){
    if(computerWin>playerWin)
        outcome.textContent= "CPU wINS!!!"
    else
        outcome.textContent= "YOU WIN!!!"
    
    const resetBtn = document.createElement('button');
    resetBtn.innerText= "Play Again!";
    outcome.appendChild(resetBtn);

    resetBtn.addEventListener('click', () => {
        window.location.reload();
    })

}



const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        playerSelection= btn.getAttribute('id').toLocaleLowerCase();

        playRound(playerSelection);

        if(playerWin==5 || computerWin==5)
            declareWinner();
    })
});