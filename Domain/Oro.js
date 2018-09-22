module.exports = index => {
    return {
        index,
        palo: "oro",
        equals(carta) {
            return carta.index === index && carta.palo === "oro"
        },
        validaSobre(carta) {
            return carta.index === index || carta.palo === "oro"
        }
    }
}