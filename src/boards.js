/**
 * @param {Number} height number of rows
 * @param {NUmber} width number of columns
 * @description indtance the connect four board
 */

export default class Board {
    constructor(board, height = 6, width = 7) {
        this.board = board
        this.width = width
        this.height = height
        this.colors = ["red", "yellow"]
        this.turn = 0;
    }

    createEmptyBoard() {
        this.board = Array(this.height).fill().map(() => Array(this.width).fill(" "))
        return this.board
    }

    createBoardView() {
        let boardEle = document.getElementById("board")
        boardEle.innerHTML = ""

        for (let index = 0; index < this.height; index++) {
            let rowEle = document.createElement("div")
            rowEle.className = "row";

            for (let col = 0; col < this.width; col++) {
                let colEle = document.createElement("div")
                colEle.className = `cell row-${index} col-${col}`
                colEle.addEventListener("click", () => {
                    this.cellClicked(col)
                })
                rowEle.appendChild(colEle)
            }
            boardEle.appendChild(rowEle)
        }
    }

    cellClicked(col) {
        this.insertDisc(col)
    }

    isEmpty() {
        return this.board.every(row => row.every(cell => cell === ' '))
    }

    isFull() {
        return !this.isEmpty;
    }

    isColumnFull(column) {
        return this.board[0][column] !== " "
    }

    getAvailableColumns() {
        const moves = []
        for (let index = 0; index < this.width; index++) {
            if (!this.isColumnFull(index)) {
                moves.push(index)
            }
        }
        return moves;
    }

    chkLine(a, b, c, d) {
        // Check first cell non-zero and all cells match
        return ((a != 0) && (a == b) && (a == c) && (a == d));
    }

    isWinner() {
        let bd = this.board;
        if (this.isEmpty()) return false;
        // Check down
        for (let r = 0; r < 3; r++)
            for (let c = 0; c < 7; c++)
                if (this.chkLine(bd[r][c], bd[r + 1][c], bd[r + 2][c], bd[r + 3][c]))
                    return {
                        winner: bd[r][c],
                        direction: "V",
                        colum: c
                    }

        // Check right
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 4; c++) {
                if (this.chkLine(bd[r][c], bd[r][c + 1], bd[r][c + 2], bd[r][c + 3])) {
                    return {
                        winner: bd[r][c],
                        direction: "H",
                        colum: c
                    }
                }
            }
        }

        // Check down-right
        for (let r = 0; r < 3; r++)
            for (let c = 0; c < 4; c++)
                if (this.chkLine(bd[r][c], bd[r + 1][c + 1], bd[r + 2][c + 2], bd[r + 3][c + 3]))
                    return {
                        winner: bd[r][c],
                        direction: "DR",
                        colum: c
                    }

        // Check down-left
        for (let r = 3; r < 6; r++)
            for (let c = 0; c < 4; c++)
                if (this.chkLine(bd[r][c], bd[r - 1][c + 1], bd[r - 2][c + 2], bd[r - 3][c + 3]))
                    return {
                        winner: bd[r][c],
                        direction: "DL",
                        colum: c
                    }
        return false;
    }

    swtichTurns() {
        this.turn = this.turn ? 0 : 1
    }

    insertDisc(column) {
        if (column > this.width) {
            console.log("invalid params")
            return;
        }
        const color = this.colors[this.turn]
        this.swtichTurns();
        if (this.isColumnFull(column)) return

        for (let row = this.height - 1; row > -1; row--) {
            if (this.board[row][column] === " ") {
                ///console.log(`inserting ${color} at ${row}, ${column}`)
                let cell = document.getElementsByClassName(`cell row-${row} col-${column}`)[0];
                cell.classList.add(color)
                ///console.log(cell)
                this.board[row][column] = color
                console.log(this.isWinner());
                return;
            }
        }

    }

    copyBoard() {
        let newBoard = new Board();
        newBoard.createEmptyBoard()

        for (let index = 0; index <= this.height - 1; index++) {
            newBoard.board[index] = this.board[index].slice()
        }

        return newBoard;
    }

}