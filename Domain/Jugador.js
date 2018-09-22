const TotalCartas = require('./TotalCartas')

module.exports = name => {
    let mano = []
    return {
        name,
        levanta(carta) {
            mano.push(carta)
        },
        roba(baraja) {
            mano.push(baraja.cartaCima())
        },
        descarta(carta, pozo) {
            mano = mano.filter(c => !c.equals(carta))
            pozo.recibe(carta)
            return this
        },
        totalCartas() {
            return TotalCartas(mano.length)
        }
    }
}