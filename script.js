function getComputerChoice() {
    let r = 3 * Math.random();
    return r < 1 ? "rock" : r < 2 ? "paper" : "scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) return 0;
    switch (playerSelection) {
        case "rock":
            return computerSelection == "paper" ? -1 : 1;
        case "paper":
            return computerSelection == "rock" ? 1 : -1;
        case "scissors":
            return computerSelection == "rock" ? -1 : 1;
        default:
            return "error"; 
    }
}

let player = 0;
let computer = 0;
const buttons = document.querySelectorAll('button');

function choose(e) {
    const winner = playRound(e.target.id, getComputerChoice());
    if (winner === 1) document.querySelector('#player').innerHTML = ++player;
    else if (winner === -1) document.querySelector('#computer').innerHTML = ++player;
    if (player == 5) {
        document.querySelector('#result').innerHTML = 'Player wins!';
        buttons.forEach(b => b.remove());
    }
    else if (computer == 5) {
        document.querySelector('result').innerHTML = 'Computer wins!';
        buttons.forEach(b => b.remove());
    }
}

buttons.forEach(b => b.addEventListener('click', choose));