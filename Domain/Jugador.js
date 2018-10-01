const TotalCartas = require('./TotalCartas')

module.exports = ({name, mano}) => {
    return {
        name,
        mano,
        manoEquals(otraMano) {
            return mano.equals(otraMano)
        },
        levanta(carta) {
            mano.cartas.push(carta)
            return this
        },
        roba(baraja) {
            mano.cartas.push(baraja.cartaCima())
            return this
        },
        juega(carta, partida) {
            partida.juega(this, carta)
        },
        descarta(carta, pozo) {
            pozo.recibe(carta)
            mano.cartas = mano.cartas.filter(
                c => !c.equals(carta)
            )
            return this
        },
        totalCartas() {
            return TotalCartas(mano.cartas.length)
        }
    }
}