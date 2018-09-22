const AssertTruth = (a) => expect(a).toBeTruthy()
const AssertFalsy = (a) => expect(a).toBeFalsy()

const Baraja = require('../Domain/Baraja')
const Jugador = require('../Domain/Jugador')
const Oro = require('../Domain/Oro')
const TotalCartas = require('../Domain/TotalCartas')

describe('Jodete', () => {

    describe('Pepe roba 2 cartas del mazo, luego descarta el 2 de Oro', () => {
        
        let baraja, pepe, pozo;

        beforeEach(() => {
            baraja = Baraja()
            pepe = Jugador('pepe')
            pozo = baraja.desvelaPozo()
            
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