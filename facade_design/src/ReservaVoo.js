class ReservaVoo {
    bookFlight(saida, destino, data) {
        console.log(`Reservando voo de ${saida} para ${destino} na data ${data}.`);
        return { flightNumber: "XY123", saida, destino, data };
    }
}

module.exports = ReservaVoo;
