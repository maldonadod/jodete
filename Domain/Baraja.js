const Oro = require('./Oro')
const Pozo = require('./Pozo')
const TotalCartas = require('./TotalCartas')

module.exports = () => {
    const cartas = [...Array(52)].map((_, index) => Oro(index + 1))
    return {
        cartaCima() {
            const carta = cartas.shift()
            if (!carta) {
                throw new Error('Baraja vacia')
            }
            return carta
        },
        pozo() {
            return Pozo(this.cartaCima())
        },
        totalCartas() {
            return TotalCartas(cartas.length)
        }
    }
}