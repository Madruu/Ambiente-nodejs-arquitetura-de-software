const GerenciadorContatosBase = require("./gerenciadorContatos");

class GerenciadorContatosComLog extends GerenciadorContatosBase {
  constructor() {
    super();
  }

  adicionarContato(contato) {
    super.adicionarContato(contato);
    console.log(`LOG: Contato ${contato.nome} foi adicionado.`);
  }

  removerContato(nome) {
    super.removerContato(nome);
    console.log(`LOG: Contato ${nome} foi removido.`);
  }
}

module.exports = GerenciadorContatosComLog;
