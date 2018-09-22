const TotalCartas = require('./TotalCartas')

module.exports = name => {
    let mano = []
    return {
        name,
        roba(baraja) {
            mano.push(baraja.cartaCima())
        },
        descarta(carta, pozo) {
            pozo.recibe(carta)
            mano = mano.filter(c => !c.equals(carta))
            return this
        },
        totalCartas() {
            return TotalCartas(mano.length)
        }
    }
}