import Cell from "../shared/Cell"
import Board from "../game/Board"
import GameResult from "../result/GameResult"
import ResultChecker from "./ResultChecker"

export default class CellsChecker implements ResultChecker {
    constructor(private readonly cells: [number, number][]) {}

    check(board: Board): GameResult {
        const cells = this.cells.map(([row, col]) => board.get(row, col))

        const types = cells.map(c => c!.type)

        return types.every((type) => type != null && type === types[0]) 
            ? new GameResult(cells as Cell[])
            : new GameResult() 
    }
}