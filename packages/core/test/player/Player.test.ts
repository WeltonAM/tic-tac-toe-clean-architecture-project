import { Player, PlayerType } from "../../src"

test('Deve retornar a mesma instacia quando adicionar 0 pontos', () => {
    const player = new Player('P1', PlayerType.O)

    expect(player.addScore(0) === player).toBeTruthy()
})

test('Deve retornar instância diferente quando adicionar pontos', () => {
    const player = new Player('P1', PlayerType.O)

    expect(player.addScore(1) === player).toBeFalsy()
})

test('Deve adicionar 10 pontos ao jogador', () => {
    const player = new Player('P1', PlayerType.O).addScore(10)

    expect(player.name).toBe('P1')
    expect(player.type).toBe(PlayerType.O)
    expect(player.score).toBe(10)
})

test('Deve limpar jogador com pontuação existente', () => {
    const player = new Player('P1', PlayerType.O, 100).clear()

    expect(player.name).toBe('P1')
    expect(player.type).toBe(PlayerType.O)
    expect(player.score).toBe(0)
})