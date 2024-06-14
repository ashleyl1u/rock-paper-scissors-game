let playerMove;
let computerMove;

//playerMove = getPlayerMove();
console.log(playerMove);
computerMove= getComputerMove();
console.log(computerMove);

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


