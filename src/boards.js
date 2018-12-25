/**
 * @param {Number} height number of rows
 * @param {NUmber} width number of columns
 * @description indtance the connect four board
 */

export default class Board {
    constructor(height = 6, width = 7) {
        this.board = board
        this.width = width
        this.height = height
        this.colors = ["red", "yellow"]
    }

    createEmptyBoard() {
        this.board = Array(this.height).fill().map(() => Array(this.width).fill(" "))
        return this.board
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

    insertDisc(color, column) {
        if (column > this.width || !this.colors.find(c => c === color)) {
            console.log("invalid params")
            return;
        }

        if (this.isColumnFull(column - 1)) return

        for (let row = this.height - 1; row > -1; row--) {
            if (this.board[row][column - 1] === " ") {
                console.log(`inserting ${color} at ${row}, ${column - 1}`)
                this.board[row][column - 1] = color
                return;
            }
        }
    }

}