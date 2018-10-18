const AssertTruth = (a) => expect(a).toBeTruthy()

const StubBaraja = require('./Stubs/Baraja')
const Jugador = require('../Domain/Jugador')
const Partida = require('../Domain/Partida')
const Mano = require('../Domain/Mano')
const Oro = require('../Domain/Oro')
const TotalCartas = require('../Domain/TotalCartas')

const Descripcion = describe
const Inicio = beforeEach
const Debe = it

Descripcion('Jodete', () => {

    Descripcion('Pepe roba 2 carta del mazo y una descarta al pozo (2 de Oro)', () => {
        
        let baraja, pepe, juan, partida
        
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

        Luego('Pepe juega 2 de Oro y su mano actual es:', () => {
            pepe.juega(Oro(2), partida)
            AssertTruth(pepe.manoEquals(
                Mano(
                    Oro(3)
                )
            ))
        })
        Entonces(`Juan levanta 2 cartas a causa del 2 de Oro,
                su mano actual es: Oro(4), Oro(5), Oro(6), Oro(7)`, () => {
            AssertTruth(juan.manoEquals(
                Mano(
                    Oro(4), Oro(5), Oro(6), Oro(7)
                )
            ))
        })
        Entonces('La última del pozo es: Oro 2', () => {
            AssertTruth(partida.ultimaDelPozo().equals(
                Oro(2)
            ))
        })
        Entonces('El total de cartas en el pozo es: 2', () => {
            AssertTruth(partida.totalCartasEnPozo().equals(
                TotalCartas(2)
            ))
        })
        Luego('Juan descarta: Oro 4', () => {
            juan.juega(Oro(4), partida)
            
            AssertTruth(juan.manoEquals(
                Mano(
                    Oro(5), Oro(6), Oro(7)
                )
            ))
        })
        Luego('Pepe descarta Oro 3, se queda sin cartas y gana!', () => {
            pepe.juega(Oro(3), partida)
            
            AssertTruth(pepe.manoEquals(
                Mano()//crear ManoVacia
            ))
            AssertTruth(partida.ganadorEs(pepe))
        })
    })
})