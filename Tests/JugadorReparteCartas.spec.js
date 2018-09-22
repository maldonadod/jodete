const AssertTruth = (a) => expect(a).toBeTruthy()
const Baraja = require('../Domain/Baraja')
const Pozo = require('../Domain/Pozo')
const Jugador = require('../Domain/Jugador')
const TotalCartas = require('../Domain/TotalCartas')

describe('Inicia la partida', () => {

    describe('Se reparten 5 cartas para cada jugador (pepe y juan)', () => {

        let baraja, pepe, juan, pozo;
        
        beforeEach(() => {
            baraja = Baraja()
            pozo = baraja.iniciarPozo(Pozo())
            pepe = Jugador('pepe')
            juan = Jugador('juan')

            pepe.roba(baraja)
            juan.roba(baraja)
            pepe.roba(baraja)
            juan.roba(baraja)
            pepe.roba(baraja)
            juan.roba(baraja)
            pepe.roba(baraja)
            juan.roba(baraja)
            pepe.roba(baraja)
            juan.roba(baraja)
        })

        it('Juan tiene en total 5 cartas', () => {
            AssertTruth(juan.totalCartas().equals(TotalCartas(5)))
        })
        it('Pepe tiene en total 5 cartas', () => {
            AssertTruth(pepe.totalCartas().equals(TotalCartas(5)))
        })
        it('El pozo tiene 1 carta', () => {
            AssertTruth(pozo.totalCartas().equals(TotalCartas(1)))
        })
        it('La baraja tiene 11 cartas menos (pepe: 5, juan: 5, pozo: 1)', () => {
            AssertTruth(baraja.totalCartas().equals(Baraja().totalCartas().menos(11)))
        })
    })
})