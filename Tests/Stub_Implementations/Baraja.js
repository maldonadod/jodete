const Pozo = require('../../Domain/Pozo')
const TotalCartas = require('../../Domain/TotalCartas')

module.exports = (...cartas) => {
    return {
        cartaCima() {
            const carta = cartas.shift()
            if (!carta) {
                throw new Error('Baraja vacia')
            }
            return carta
        },
        iniciarPozo(pozo) {
            return pozo.nuevo(this.cartaCima())
        },
        totalCartas() {
            return TotalCartas(cartas.length)
        }
    }
}