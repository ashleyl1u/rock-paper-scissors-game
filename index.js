let playerMove;
let computerMove;

playerMove = getPlayerMove();
computerMove= getComputerMove();
console.log(computerMove);
const roundStatus = playRound(playerMove, computerMove);
console.log(roundStatus);


function getPlayerMove () {
  let move = prompt ('Enter your move (Rock, Paper, Scissors): ');
  move = move.toLowerCase();
  
  while ( move !== 'rock' && move !== 'paper' && move !== 'scissors'){
    move = prompt ('Invalid! Renter your move (Rock, Paper, Scissors): ');
    move = move.toLowerCase();
  }
  
  return move;
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

  return roundStatus;

}

