class ReservaHotel {
    bookHotel(location, checkIn, checkOut) {
        console.log(`Reservando hotel em ${location} de ${checkIn} a ${checkOut}.`);
        return { hotelName: "Hotel Example", location, checkIn, checkOut };
    }
}

module.exports = ReservaHotel;