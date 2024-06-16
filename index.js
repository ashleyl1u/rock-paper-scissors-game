let playerScore=0;
let computerScore =0;
let roundCounter=0;


document.querySelectorAll('.js-move-button').forEach((element) => {
  element.addEventListener('click', () => {
    let playerMove = element.innerHTML;
    updateMoveImg (playerMove, 'player');

    let computerMove= getComputerMove();
    updateMoveImg (computerMove, 'computer');

    updateScore(playRound(playerMove, computerMove));
    gameEndCheck();
  });
});


function gameEndCheck () {
  if(roundCounter == 5){
    
    document.querySelector('.js-moves').style.display = 'none';
    document.querySelector('.js-game-over').style.display = 'flex';
    
    if(computerScore<playerScore){
      document.querySelector('.js-game-over-message').innerHTML = `You Win!`;
    
    }
    else if(computerScore>playerScore){
      document.querySelector('.js-game-over-message').innerHTML = `You Lose!`;
    
    }
    else{
      document.querySelector('.js-game-over-message').innerHTML = `Tie!`;
    
    }
    
  }
}

document.querySelector('.js-play-again').addEventListener('click', () => {
  resetGame();
});



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

function updateMoveImg (move, player){
    document.querySelector(`.js-${player}-move`).innerHTML = `
      <img src="./images/${move}.png" alt="">
    `;
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
  document.querySelector('.js-round').innerHTML = `Round ${roundCounter}: ${roundStatus}`;
  return roundStatus;

}

function updateScore(roundStatus){
  if (roundStatus === 'win'){
    playerScore++;
    document.querySelector('.js-player-score').innerHTML= `wins: ${playerScore}`;
  }
  else if (roundStatus === 'lose'){
    computerScore++;
    document.querySelector('.js-computer-score').innerHTML= `wins: ${computerScore}`;
  }
}




function resetGame(){
  playerScore=0;
  computerScore=0;
  roundCounter=0;

  
  document.querySelector('.js-player-score').innerHTML= `wins: ${playerScore}`;
  document.querySelector('.js-computer-score').innerHTML= `wins: ${computerScore}`;

  document.querySelector('.js-player-move').innerHTML = '';
  document.querySelector('.js-computer-move').innerHTML = '';

  document.querySelector('.js-round').innerHTML = 'Click a move to start!';

  document.querySelector('.js-moves').style.display = 'flex';
  document.querySelector('.js-game-over').style.display = 'none';

  

  

}

