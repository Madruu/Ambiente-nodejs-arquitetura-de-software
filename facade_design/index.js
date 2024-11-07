const TravelFacade = require('./src/TravelFacade');

const facade = new TravelFacade();
const detalheViagem = facade.bookTrip(
    "São Paulo",
    "Rio de Janeiro",
    "2023-12-20",
    "2023-12-20",
    "2023-12-25",
    "2023-12-20",
    "2023-12-25"
);

console.log("\nDetalhes da Viagem Reservada:");
console.log(detalheViagem);
