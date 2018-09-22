const AssertTruth = (a) => expect(a).toBeTruthy()

const Jugador = require('../Domain/Jugador')
const Oro = require('../Domain/Oro')
const Pozo = require('../Domain/Pozo')
const TotalCartas = require('../Domain/TotalCartas')

describe('Tirando cartas', () => {

    it('El jugador puede deshacerse de cartas tirandolas al pozo', () => {
        
        const pepe = Jugador('pepe')
        const oro_3 = Oro(3)
        const oro_4 = Oro(4)
        const oro_5 = Oro(5)
        const oro_6 = Oro(6)
        pepe.levanta(oro_3)
        pepe.levanta(oro_4)
        pepe.levanta(oro_5)

        let pozo = Pozo(oro_6)
        
        pepe.tira(oro_3, pozo)
        .tira(oro_4, pozo)
        .tira(oro_5, pozo)

        AssertTruth(Oro(5).equals(pozo.ultimaCarta()))
        AssertTruth(TotalCartas(4).equals(pozo.totalCartas()))
        AssertTruth(pepe.sinCartas())
    })   
})