module.exports = (...cartas) => {
    return {
        cartas,
        equals(mano) {
            return cartas.reduce((a, b) => a.filter((c) => c.equals(b)), mano.cartas).length === 0
        }
    }
}