const Oro = require('./Oro')
const Pozo = require('./Pozo')

module.exports = () => {
    const cartas = [1, 2, 3, 4, 5, 6].map(index => Oro(index))
    return {
        cartaCima() {
            const carta = cartas.shift()
            if (!carta) {
                throw new Error('Baraja vacia')
            }
            return carta
        },
        desvelaPozo() {
            return Pozo(this.cartaCima())
        }
    }
}