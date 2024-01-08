import { Cell, PlayerType } from "../../src"

test('Deve criar uma celula preenchida', () => {
    const cell = new Cell(0, 2, PlayerType.X)

    expect(cell.row).toBe(0)
    expect(cell.col).toBe(2)
    expect(cell.type).toBe(PlayerType.X)
    expect(cell.isEmpty()).toBeFalsy()
    expect(cell.isNotEmpty()).toBeTruthy()
})

test('Deve criar uma celula vazia', () => {
    const cell = new Cell(0, 2)

    expect(cell.row).toBe(0)
    expect(cell.col).toBe(2)
    expect(cell.type).toBeNull()
    expect(cell.isEmpty()).toBeTruthy()
    expect(cell.isNotEmpty()).toBeFalsy()
})

test('Deve transformar uma celula vazia em preenchida', () => {
    const emptyCell = new Cell(0, 2)
    expect(emptyCell.type).toBeNull()

    const cell = emptyCell.markWith(PlayerType.O)
    expect(cell.type).toBe(PlayerType.O)
})

test('Deve ignorar marcação em uma celula já marcada', () => {
    const cell = new Cell(0, 2).markWith(PlayerType.O)

    const sameCell = cell.markWith(PlayerType.X)

    expect(cell === sameCell).toBeTruthy()
})