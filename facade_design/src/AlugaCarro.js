class AlugaCarro {
    rentCar(location, dataAluguel, dataDevolucao) {
        console.log(`Alugando carro em ${location} de ${dataAluguel} a ${dataDevolucao}.`);
        return { carType: "SUV", location, dataAluguel, dataDevolucao };
    }
}

module.exports = AlugaCarro;