const TotalCartas = require('./TotalCartas')

module.exports = name => {
    let mano = []
    return {
        name,
        levanta(carta) {
            mano.push(carta)
        },
        tira(carta, pozo, partida) {
            pozo.recibe(carta)
            mano = mano.filter(c => !c.equals(carta))
            return this
        },
        totalCartas() {
            return TotalCartas(mano.length)
        },
        sinCartas() {
            return this.totalCartas().equals(TotalCartas(0))
        }
    }
}