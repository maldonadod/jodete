const AssertTruth = (a) => expect(a).toBeTruthy()
const AssertEquals = (a, b) => expect(a).toEqual(b)

const Jugador = require('../../Domain/Jugador')
const StubBaraja = require('../Stubs/Baraja')
const Pozo = require('../../Domain/Pozo')
const Copa = require('../../Domain/Copa')
const Oro = require('../../Domain/Oro')
const TotalCartas = require('../../Domain/TotalCartas')

const Partida = require('../../Domain/Partida')

describe('Jugador es penalizado a levantar una carta por tirar carta invalida en el pozo', () => {

    let baraja, partida, pepe

    beforeEach(() => {
        baraja = StubBaraja(Copa(1), Oro(2), Oro(3))
        pepe = Jugador('pepe')
        partida = Partida(baraja)

        partida.juega(pepe, Oro(2))
    })

    it('Pepe termina levantando la el 2 de oro y con 1 carta más', () => {
        AssertTruth(pepe.totalCartas().equals(TotalCartas(2)))
    })
})