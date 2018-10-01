const AssertTruth = (a) => expect(a).toBeTruthy()

const StubBaraja = require('./Stubs/Baraja')
const Jugador = require('../Domain/Jugador')
const Partida = require('../Domain/Partida')
const Mano = require('../Domain/Mano')
const Oro = require('../Domain/Oro')
const TotalCartas = require('../Domain/TotalCartas')

const Descripcion = (a, b) => describe(a, b)
const Inicio = (a) => beforeEach(a)
const Debe = (a, b) => it(a, b)

Descripcion('Jodete', () => {

    Descripcion('Pepe roba 2 carta del mazo y una descarta al pozo (2 de Oro)', () => {
        
        let baraja, pepe, partida

        Inicio(() => {

            baraja = StubBaraja(
                Oro(1), Oro(2), Oro(3), Oro(4), Oro(5), Oro(6), Oro(7)
            )
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

        Debe('La mano actual de Pepe es: Oro(3)', () => {
            AssertTruth(pepe.manoEquals(
                Mano(
                    Oro(3)
                )
            ))
        })
        Debe('La mano actual de Juan es: Oro(4), Oro(5), Oro(6), Oro(7)', () => {
            AssertTruth(juan.manoEquals(
                Mano(
                    Oro(4), Oro(5), Oro(6), Oro(7)
                )
            ))
        })
        Debe('Cara del pozo es: Oro 2', () => {
            AssertTruth(partida.caraDelPozo().equals(
                Oro(2)
            ))
        })
        Debe('Cartas total del pozo: 2', () => {
            AssertTruth(partida.totalCartasEnPozo().equals(
                TotalCartas(2)
            ))
        })
    })
})