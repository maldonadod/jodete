const Baraja = require('../../Domain/Baraja')

module.exports = (...cartas) => {
    const baraja = Baraja()
    baraja.cartaCima = () => cartas.shift()
    return baraja
}