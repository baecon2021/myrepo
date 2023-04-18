const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choicebtn")
let scorePlayer
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn()
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computador: ${computer}`;
    resultText.textContent = checkWin();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
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

function checkWin(){
    if (player == computer){
        return "Empate!";
    }
    else if (computer == "PEDRA"){
        return (player == "PAPEL") ? "Voce venceu!" : "Voce Perdeu!";
    }
    else if (computer == "PAPEL"){
        return (player == "TESOURA") ? "Voce venceu!" : "Voce perdeu!";
    }
    else if (computer == "TESOURA"){
        return (player == "PEDRA") ? "voce venceu!" : "Voce perdeu!"
    }
}
