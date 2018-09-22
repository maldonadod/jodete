const TotalCartas = require('./TotalCartas')

module.exports = ({name, mano}) => {
    return {
        name,
        manoEquals(otraMano) {
            return mano.equals(otraMano)
        },
        levanta(carta) {
            mano.cartas.push(carta)
        },
        roba(baraja) {
            mano.cartas.push(baraja.cartaCima())
        },
        descarta(carta, pozo) {
            mano.cartas = mano.cartas.filter(c => c.equals(carta))
            pozo.recibe(carta)
            return this
        },
        totalCartas() {
            return TotalCartas(mano.cartas.length)
        }
    }
}