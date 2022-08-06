function rockPaperScissorsWinner(player1, player2) {
  var player1 = Math.floor(Math.random() * 3);
  var player2 = Math.floor(Math.random() * 3);

  if (player1 === player2) {
    console.log(`Player 1 jogou ${player1} e Player 2 jogou ${player2}`);
    console.log('Empate')
  } else if ((player1 == 0) && (player2 == 1)) {
    console.log(`Player 1 jogou ${player1} e Player 2 jogou ${player2}`);
    console.log('player 1 ganhou')
  } else if ((player1 == 0) && (player2 == 2)) {
    console.log(`Player 1 jogou ${player1} e Player 2 jogou ${player2}`);
    console.log('player 2 ganhou')
  } else if ((player1 == 1) && (player2 == 0)) {
    console.log(`Player 1 jogou ${player1} e Player 2 jogou ${player2}`);
    console.log('player 2 ganhou')
  } else if ((player1 == 1) && (player2 == 1)) {
    console.log(`Player 1 jogou ${player1} e Player 2 jogou ${player2}`);
    console.log('Empate')
  } else if ((player1 == 1) && (player2 == 2)) {
    console.log(`Player 1 jogou ${player1} e Player 2 jogou ${player2}`);
    console.log('player 2 ganhou')
  } else if ((player1 == 2) && (player2 == 0)) {
    console.log(`Player 1 jogou ${player1} e Player 2 jogou ${player2}`);
    console.log('player 2 ganhou')
  } else if ((player1 == 2) && (player2 == 1)) {
    console.log(`Player 1 jogou ${player1} e Player 2 jogou ${player2}`);
    console.log('player 2 ganhou')
  } else if ((player1 == 2) && (player2 == 2)) {
    console.log(`Player 1 jogou ${player1} e Player 2 jogou ${player2}`);
    console.log('Empate')
  }
}
console.log("".padEnd(20, "-="))
console.log('Jogo de Jokenpô')
console.log('0 = tesoura\n1 = papel\n2 = pedra')
console.log("".padEnd(20, "-="))
var computador = rockPaperScissorsWinner(0, 3)
console.log("".padEnd(20, "-="))
