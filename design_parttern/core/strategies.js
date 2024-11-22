class BuscaPorNome {
    buscar(contatos, termo) {
      return contatos.filter((contato) => contato.nome.toLowerCase().includes(termo.toLowerCase()));
    }
  }
  
  class BuscaPorEmail {
    buscar(contatos, termo) {
      return contatos.filter((contato) => contato.email.toLowerCase().includes(termo.toLowerCase()));
    }
  }
  
  class GerenciadorBusca {
    constructor(estrategia) {
      this.estrategia = estrategia;
    }
  
    setEstrategia(estrategia) {
      this.estrategia = estrategia;
    }
  
    buscar(contatos, termo) {
      return this.estrategia.buscar(contatos, termo);
    }
  }
  
  module.exports = { BuscaPorNome, BuscaPorEmail, GerenciadorBusca };
  