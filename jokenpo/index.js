const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const scoreText = document.querySelector("#scoreText");
const choiceBtns = document.querySelectorAll(".choicebtn")
let playerScore = 0;
let computerScore = 0;
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    scoreText.textContent = `Player: ${playerScore} // ${computerScore} :Computador`
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computador: ${computer}`;
    resultText.textContent = checkWin();

}));

function computerTurn() {

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            computer = "PEDRA";
            break;
        case 2:
            computer = "PAPEL";
            break;
        case 3:
            computer = "TESOURA";
    }
}

function checkWin() {
    if (player == computer) {
        return "Empate!";
    }
    else if (computer == "PEDRA") {
        return (player == "PAPEL") ?
            (
                playerScore = playerScore + 1,
                "Voce venceu!"
            ) :
            (
                computerScore = computerScore + 1,
                "Voce perdeu!"
            );
    }
    else if (computer == "PAPEL") {
        return (player == "TESOURA") ?
            (
                playerScore ++,
                "Voce venceu!"
            ) :
            (
                computerScore ++,
                "Voce perdeu!"
            );
    }
    else if (computer == "TESOURA") {
        return (player == "PEDRA") ?
            (
                playerScore ++,
                "Voce venceu!"
            ) :
            (
                computerScore ++,
                "Voce perdeu!"
            );
    };
};