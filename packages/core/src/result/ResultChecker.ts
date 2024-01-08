import Board from "../game/Board"
import GameResult from "../result/GameResult"

export default interface ResultChecker {
    check(board: Board): GameResult   
}