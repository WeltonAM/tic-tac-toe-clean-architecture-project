import { Cell, GameResult, PlayerType } from "../../src"

test('Deve', () => {
    const tied = new GameResult([], true)

    expect(tied.finished).toBeTruthy()
    expect(tied.tied).toBeTruthy()
    expect(tied.inProgress).toBeFalsy()
})

test('Deve criar um resultado com vitória', () => {
    const c1 = new Cell(0, 0, PlayerType.X)
    const c2 = new Cell(0, 1, PlayerType.X)
    const c3 = new Cell(0, 2, PlayerType.X)

    const winner = new GameResult([c1, c2, c3])

    expect(winner.finished).toBeTruthy()
    expect(winner.tied).toBeFalsy()
    expect(winner.hasCell(0, 0)).toBeTruthy()
    expect(winner.hasCell(1, 1)).toBeFalsy()
})