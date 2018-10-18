module.exports = index => {
    return {
        index,
        palo: "copa",
        equals(carta) {
            return carta.index === index && carta.palo === "copa"
        },
        validaSobre(carta) {
            return carta.index === index || carta.palo === "copa"
        },
        signature() {
            return `${index}${this.palo}`
        }
    }
}