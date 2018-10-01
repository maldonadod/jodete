const Baraja = require('../../Domain/Baraja')

String.prototype.into = function(fn) {
    fn(this.valueOf())
}

const IConsole = x => console.log(x)
const IConsoleVoid = x => {}

const Iniciar = (...cartas) => {
    const baraja = Baraja()
    const robar = () => {
        return cartas.shift()
    }
    baraja.cartaCima = robar
    return baraja
}

const Debugging = (...cartas) => {

    const baraja = Iniciar(...cartas)

    cartas
        .map(carta => `${carta.index} ${carta.palo}`)
        .join(' - ')
        .into(IConsoleVoid)

    return baraja
}

module.exports = Debugging