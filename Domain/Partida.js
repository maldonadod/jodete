const Pozo = require('../Domain/Pozo')

const Penalizar = (jugador, carta, baraja) => {
    jugador.levanta(carta)
    jugador.roba(baraja)
}

module.exports = baraja => {

    const pozo = baraja.iniciarPozo(Pozo())

    return {
        caraDelPozo() {
            return pozo.ultimaCarta()
        },
        totalCartasEnPozo() {
            return pozo.totalCartas()
        },
        juega(jugador, carta) {

            carta.validaSobre(pozo.ultimaCarta()) 
            ? jugador.descarta(carta, pozo)
            : Penalizar(jugador, carta, baraja)
        }
    }
}