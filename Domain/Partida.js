const Pozo = require('../Domain/Pozo')

const PenalizarLevantaOtra = (jugador, baraja) => {
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
            : PenalizarLevantaOtra(jugador, baraja)
        }
    }
}