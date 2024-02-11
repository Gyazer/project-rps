// hi 

function getPlayerChoice(){
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors'){
        alert("Invalid input!");
        let newChoice = prompt("Rock, Paper, or Scissors?");
        newChoice = newChoice.toLowerCase();
        if(newChoice != 'rock' && newChoice != 'paper' && newChoice != 'scissors'){
            alert("Invalid input n2. You lose for being stupid.");
            newChoice = 'failure';
            return newChoice;
        } else {
            return newChoice;
        }
    } else {
        return playerChoice;
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random()* 3);

    if(choice === 0){
        return 'rock';
    } else if (choice === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerChoice, computerChoice){

    if(playerChoice === 'failure'){
        return 'computerwin';
    }

    if(playerChoice === computerChoice){
        return 'draw';
    }

    if(playerChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'computerwin';
        } else {
            return 'playerwin';
        }
    }

    if(playerChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'computerwin';
        } else {
            return 'playerwin';
        }
    }

    if(playerChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'computerwin';
        } else {
            return 'playerwin';
        }
    }
}

function playGame(){

    let userScore = 0
    let compScore = 0

    for (let rounds = 1; rounds <= 5; rounds++) {

        let roundResult = playRound(getPlayerChoice(), getComputerChoice());

        switch (roundResult) {
            case 'draw':
                console.log("Draw! No points added.");
                break;
            case 'playerwin':
                console.log("You win the round!");
                userScore++;
                break;
            case 'computerwin':
                console.log("The computer wins the round!");
                compScore++;
        }
    }

    if(userScore === compScore){
        console.log(`Game is a draw! Player: ${userScore}, Computer: ${compScore}`);
    } else if(userScore < compScore){
        console.log(`You lose the game! Player: ${userScore}, Computer: ${compScore}`);
    } else {
        console.log(`You win! Player: ${userScore}, Computer: ${compScore}`);
    }

}

playGame();