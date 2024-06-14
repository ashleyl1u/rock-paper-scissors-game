let playerMove;

playerMove = getPlayerMove();
console.log(playerMove);

function getPlayerMove () {
  let move = prompt ('Enter your move (Rock, Paper, Scissors): ');
  move = move.toLowerCase();
  
  while ( move !== 'rock' && move !== 'paper' && move !== 'scissors'){
    move = prompt ('Invalid! Renter your move (Rock, Paper, Scissors): ');
    move = move.toLowerCase();
  }
  
  return move;
}


