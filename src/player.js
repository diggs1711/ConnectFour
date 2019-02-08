/**
 * @param {Number} max_depth 
 * @return player
 * @description instance of the player
 */

import Board from "./boards.js"

export default class Player {
    constructor(max_depth = -1) {
        this.max_depth = max_depth
        this.nodes_map = new Map()
    }

    getBestMove(board, maximising = true, callback = () => {}, depth = 0) {
        //clear nodes map
        if (depth == 0) this.nodes_map.clear()

        if (board.isWinner() || depth === this.max_depth) {
            let winner = board.isWinner();
            if (winner.winner === "red") return (1000 - depth)
            else if (winner.winner === "yellow") return (-1000 + depth)
            return 0
        }

        if (maximising) {
            let best = -Infinity;

            board.getAvailableColumns().forEach(index => {
                let copy = board.copyBoard()
                copy.insertDisc("red", index)
                let node_value = this.getBestMove(copy, false, callback, depth + 1)
                best = Math.max(best, node_value)

                if (depth == 0) {
                    let moves = this.nodes_map.has(node_value) ? `${this.nodes_map.get(node_value)},${index}` : index
                    this.nodes_map.set(node_value, moves)
                }
            });

            if (depth == 0) {
                if (typeof this.nodes_map.get(best) == 'string') {
                    var arr = this.nodes_map.get(best).split(',');
                    var rand = Math.floor(Math.random() * arr.length);
                    var ret = arr[rand];
                } else {
                    ret = this.nodes_map.get(best);
                }
                //run a callback after calculation and return the index
                callback(ret);
                return ret;
            }

            return best;
        }
        if (!maximising) {
            let best = Infinity;

            board.getAvailableColumns().forEach(index => {
                let copy = board.copyBoard()
                copy.insertDisc("yellow", index)
                let node_value = this.getBestMove(copy, true, callback, depth + 1)
                best = Math.min(best, node_value)

                if (depth == 0) {
                    let moves = this.nodes_map.has(node_value) ? `${this.nodes_map.get(node_value)},${index}` : index
                    this.nodes_map.set(node_value, moves)
                }
            });

            if (depth == 0) {
                if (typeof this.nodes_map.get(best) == 'string') {
                    var arr = this.nodes_map.get(best).split(',');
                    var rand = Math.floor(Math.random() * arr.length);
                    var ret = arr[rand];
                } else {
                    ret = this.nodes_map.get(best);
                }
                //run a callback after calculation and return the index
                callback(ret);
                return ret;
            }

            return best;
        }
    }
}