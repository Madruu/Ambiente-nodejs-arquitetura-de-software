const readline = require("readline");
const Contato = require("../models/contato");
const GerenciadorContatosComLog = require("../core/decorators");
const { BuscaPorNome, BuscaPorEmail, GerenciadorBusca } = require("../core/strategies");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gerenciador = new GerenciadorContatosComLog();
const buscador = new GerenciadorBusca(new BuscaPorNome());

function menu() {
  console.log("\n*** Gerenciador de Contatos ***");
  console.log("1. Adicionar Contato");
  console.log("2. Remover Contato");
  console.log("3. Listar Contatos");
  console.log("4. Buscar Contato");
  console.log("5. Sair");
  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Nome: ", (nome) => {
          rl.question("Telefone: ", (telefone) => {
            rl.question("Email: ", (email) => {
              const contato = new Contato(nome, telefone, email);
              gerenciador.adicionarContato(contato);
              menu();
            });
          });
        });
        break;
      case "2":
        rl.question("Nome do contato a remover: ", (nome) => {
          gerenciador.removerContato(nome);
          menu();
        });
        break;
      case "3":
        gerenciador.listarContatos();
        menu();
        break;
      case "4":
        rl.question("Digite o termo de busca: ", (termo) => {
          rl.question("Buscar por (1) Nome ou (2) Email? ", (tipoBusca) => {
            if (tipoBusca === "1") {
              buscador.setEstrategia(new BuscaPorNome());
            } else if (tipoBusca === "2") {
              buscador.setEstrategia(new BuscaPorEmail());
            } else {
              console.log("Opção inválida.");
              menu();
              return;
            }
            const resultados = buscador.buscar(gerenciador.contatos, termo);
            if (resultados.length === 0) {
              console.log("Nenhum contato encontrado.");
            } else {
              console.log("Resultados:");
              resultados.forEach((contato) =>
                console.log(`${contato.nome} - ${contato.telefone} - ${contato.email}`)
              );
            }
            menu();
          });
        });
        break;
      case "5":
        console.log("Saindo...");
        rl.close();
        break;
      default:
        console.log("Opção inválida.");
        menu();
    }
  });
}

// Inicia o programa
menu();
