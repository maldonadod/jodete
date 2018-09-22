module.exports = total => {
    return {
        total,
        equals(other) {
            return total === other.total
        }
    }
}