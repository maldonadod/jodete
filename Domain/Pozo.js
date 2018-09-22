const TotalCartas = require('./TotalCartas')

module.exports = carta => {
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
        }
    }
}