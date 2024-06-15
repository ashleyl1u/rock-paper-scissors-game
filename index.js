
let playerScore=0;
let computerScore =0;
let roundCounter=0;

printScores();



document.querySelectorAll('.js-move-button').forEach((element) => {
  element.addEventListener('click', () => {
    let playerMove = element.innerHTML;
    let computerMove= getComputerMove();
    updateScore(playRound(playerMove, computerMove));
    printScores();
    gameEndCheck();
  });
});

function gameEndCheck () {
  if(roundCounter == 5){
    document.querySelector('.js-buttons').innerHTML = '';
  }
}




function getComputerMove(){
  const ranNum = Math.random();
  let move;

  if(ranNum >=0 && ranNum <0.33){
    move= 'rock';
  }
  else if (ranNum >=0.33 && ranNum<0.66){
    move= 'paper';
  }
  else if(ranNum >=0.66 && ranNum<1){
    move = 'scissors';
  }

  return move;
}


function playRound(playerMove, computerMove){
  let roundStatus ;
  if (playerMove === 'rock' ){
    if(computerMove === 'rock'){
      roundStatus = 'tie'
    }
    if(computerMove === 'paper'){
      roundStatus = 'lose' 
    }
    if (computerMove === 'scissors'){
      roundStatus = 'win' 
    }
  }

  else if (playerMove === 'paper' ){
    if(computerMove === 'rock'){
      roundStatus = 'win'
    }
    if(computerMove === 'paper'){
      roundStatus = 'tie' 
    }
    if (computerMove === 'scissors'){
      roundStatus = 'lose' 
    }
  }

  else if (playerMove === 'scissors' ){
    if(computerMove === 'rock'){
      roundStatus = 'lose'
    }
    if(computerMove === 'paper'){
      roundStatus = 'win' 
    }
    if (computerMove === 'scissors'){
      roundStatus = 'tie' 
    }
  }

  roundCounter++;
  return roundStatus;

}

function updateScore(roundStatus){
  if (roundStatus === 'win'){
    playerScore++;
  }
  else if (roundStatus === 'lose'){
    computerScore++;
  }
}

function printScores (){
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
}