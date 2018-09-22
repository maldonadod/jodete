const TotalCartas = require('./TotalCartas')

const Pozo = carta => {
    let list = [carta]
    return {
        recibe(carta) {
            list.push(carta)
        },
        ultimaCarta() {
            return list.reduce((a, b) => b)
        },
        totalCartas() {
            return TotalCartas(list.length)
        },
        nuevo(carta) {
            return Pozo(carta)
        }
    }
}

module.exports = Pozo