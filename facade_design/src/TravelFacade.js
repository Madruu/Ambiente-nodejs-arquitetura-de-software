const ReservaVoo = require('./ReservaVoo');
const ReservaHotel = require('./ReservaHotel');
const AlugaCarro = require('./AlugaCarro');

class TravelFacade {
    constructor() {
        this.reservaVoo = new ReservaVoo();
        this.reservaHotel = new ReservaHotel();
        this.alugaCarro = new AlugaCarro();
    }

    bookTrip(saida, destino, dataVoo, hotelCheckIn, hotelCheckOut, dataAluguelCarro, dataDevolucaoCarro) {
        const voo = this.reservaVoo.bookFlight(saida, destino, dataVoo);
        const hotel = this.reservaHotel.bookHotel(destino, hotelCheckIn, hotelCheckOut);
        const carro = this.alugaCarro.rentCar(destino, dataAluguelCarro, dataDevolucaoCarro);

        return { voo, hotel, carro };
    }
}

module.exports = TravelFacade;
