const AssertTruth = (a) => expect(a).toBeTruthy()

const StubBaraja = require('./Stub_Implementations/Baraja')
const Jugador = require('../Domain/Jugador')
const Pozo = require('../Domain/Pozo')
const Oro = require('../Domain/Oro')
const TotalCartas = require('../Domain/TotalCartas')

describe('Jodete', () => {

    describe('Pepe roba 2 carta del mazo y una descarta al pozo (2 de Oro)', () => {
        
        let baraja, pepe, pozo

        beforeEach(() => {
            baraja = StubBaraja(Oro(1), Oro(12), Oro(2))
            pepe = Jugador('pepe')
            pozo = baraja.iniciarPozo(Pozo())
            
            pepe.roba(baraja)
            pepe.roba(baraja)

            pepe.descarta(Oro(2), pozo)
        })

        it('Pepe se queda con una Carta', () => {
            AssertTruth(pepe.totalCartas().equals(TotalCartas(1)))
        })
        it('La última carta del pozo es el 2 de Oro', () => {
            AssertTruth(pozo.ultimaCarta().equals(Oro(2)))
        })
        it('El pozo en total contiene 2 cartas', () => {
            AssertTruth(pozo.totalCartas().equals(TotalCartas(2)))
        })
    })
})