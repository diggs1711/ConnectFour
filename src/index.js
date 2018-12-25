import Board from "./boards.js";
import Player from "./player.js";

let board = new Board()
board.createEmptyBoard()

board.insertDisc("red", 1)
console.log(board)
let player = new Player()

console.log(player.getBestMove(board))
console.log(player.nodes_map)