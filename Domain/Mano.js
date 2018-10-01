const toSignature = carta => carta.signature()

module.exports = (...cartas) => {
    return {
        cartas,
        equals(mano) {
            const a = this.cartas.map(toSignature).join()
            const b = mano.cartas.map(toSignature).join()
            return a === b
        }
    }
}