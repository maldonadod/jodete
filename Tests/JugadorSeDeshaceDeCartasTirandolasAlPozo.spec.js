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
            const cartas_pepe = [Oro(2), Oro(3)]
            const cartas_juan = [Oro(4), Oro(5)]

            const baraja = StubBaraja(Oro(1), ...cartas_pepe, ...cartas_juan, Oro(6), Oro(7))
            pepe = Jugador({
                mano: Mano(),
                name: 'pepe'
            })
            juan = Jugador({
                mano: Mano(),
                name: 'juan'
            })
            partida = Partida(baraja, pepe, juan)
            
            pepe.roba(baraja)
            pepe.roba(baraja)
            juan.roba(baraja)
            juan.roba(baraja)

            pepe.juega(Oro(2), partida)
        })

        it('La mano actual de Pepe es', () => {
            AssertTruth(pepe.manoEquals(
                Mano(
                    Oro(3)
                )
            ))
        })
        it('La mano actual de Juan es', () => {
            AssertTruth(juan.manoEquals(
                Mano(
                    Oro(4), Oro(5), Oro(6), Oro(7)
                )
            ))
        })
        it('La cara pozo es el 2 de Oro', () => {
            AssertTruth(partida.caraDelPozo().equals(
                Oro(2)
            ))
        })
        it('El pozo en total contiene 2 cartas', () => {
            AssertTruth(partida.totalCartasEnPozo().equals(
                TotalCartas(2)
            ))
        })
        it('Juan levanto 2 (A causa del 2 de oro tirado por pepe)', () => {
            AssertTruth(juan.totalCartas().equals(
                TotalCartas(4)
            ))
        })
    })
})