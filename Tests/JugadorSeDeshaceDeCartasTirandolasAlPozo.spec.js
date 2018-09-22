const AssertTruth = (a) => expect(a).toBeTruthy()

const StubBaraja = require('./Stubs/Baraja')
const Jugador = require('../Domain/Jugador')
const Partida = require('../Domain/Partida')
const Mano = require('../Domain/Mano')
const Oro = require('../Domain/Oro')
const TotalCartas = require('../Domain/TotalCartas')

describe('Jodete', () => {

    describe('Pepe roba 2 carta del mazo y una descarta al pozo (2 de Oro)', () => {
        
        let baraja, pepe, partida

        beforeEach(() => {
            baraja = StubBaraja(Oro(1), Oro(12), Oro(2))
            pepe = Jugador({
                mano: Mano(),
                name: 'pepe'
            })

            partida = Partida(baraja)
            
            pepe.roba(baraja)
            pepe.roba(baraja)

            partida.juega(pepe, Oro(2))
        })

        it('Pepe se queda con una Carta', () => {
            AssertTruth(pepe.totalCartas().equals(TotalCartas(1)))
        })
        it('La última carta del pozo es el 2 de Oro', () => {
            AssertTruth(partida.caraDelPozo().equals(Oro(2)))
        })
        it('El pozo en total contiene 2 cartas', () => {
            AssertTruth(partida.totalCartasEnPozo().equals(TotalCartas(2)))
        })
    })
})