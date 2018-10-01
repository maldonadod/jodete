const TotalCartas = require('./TotalCartas')

const Oro2 = () => {
    const index = 2
    return {
        index,
        palo: "oro",
        equals(carta) {
            return carta.index === index && carta.palo === "oro"
        },
        validaSobre(carta) {
            return carta.index === index || carta.palo === "oro"
        },
        signature() {
            return `${index}${this.palo}`
        },
        activarEfecto(partida, actualJugador) {
            partida.siguienteJugadorLevanta(actualJugador, TotalCartas(2))
        }
    }
}

module.exports = index => {
    return index === 2 ? Oro2() : {
        index,
        palo: "oro",
        equals(carta) {
            return carta.index === index && carta.palo === "oro"
        },
        validaSobre(carta) {
            return carta.index === index || carta.palo === "oro"
        },
        signature() {
            return `${index}${this.palo}`
        },
        activarEfecto(partida, jugador) {
            
        }
    }
}