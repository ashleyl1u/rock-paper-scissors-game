
let playerScore=0;
let computerScore =0;
let roundCounter=0;





document.querySelectorAll('.js-move-button').forEach((element) => {
  element.addEventListener('click', () => {
    let playerMove = element.innerHTML;
    document.querySelector('.js-player-move').innerHTML=playerMove;

    let computerMove= getComputerMove();
    document.querySelector('.js-computer-move').innerHTML=computerMove;

    updateScore(playRound(playerMove, computerMove));
    gameEndCheck();
  });
});

function gameEndCheck () {
  if(roundCounter == 5){
    document.querySelector('.js-buttons').innerHTML = '';

    if(computerScore<playerScore){
      document.querySelector('.js-final').innerHTML = `\n You Win!`;
    
    }
    else if(computerScore>playerScore){
      document.querySelector('.js-final').innerHTML = ` \n You Lose!`;
    
    }
    else{
      document.querySelector('.js-final').innerHTML = `\n Tie!`;
    
    }
    
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

