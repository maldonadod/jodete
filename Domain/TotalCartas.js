const TotalCartas = total => {
    return {
        total,
        menos(integerADescontar) {
            return TotalCartas(total - integerADescontar)
        },
        equals(other) {
            return total === other.total
        }
    }
}

module.exports = TotalCartas