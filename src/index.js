import Board from "./boards.js";
import Player from "./player.js";
import './css/style.scss'

let board = new Board()
board.createEmptyBoard();
board.createBoardView();

document.getElementById("reset").addEventListener("click", createNewGame)

function createNewGame() {
    let board = new Board()
    board.createEmptyBoard()
    board.createBoardView()
}