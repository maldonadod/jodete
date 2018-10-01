module.exports = (...cartas) => {
    return {
        cartas,
        equals(mano) {
            const a = this.cartas.map(carta => carta.signature()).join()
            const b = mano.cartas.map(carta => carta.signature()).join()
            return a === b
        }
    }
}