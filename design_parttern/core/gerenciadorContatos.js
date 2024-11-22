class GerenciadorContatosBase {
    constructor() {
      this.contatos = [];
    }
  
    adicionarContato(contato) {
      this.contatos.push(contato);
      console.log(`Contato ${contato.nome} adicionado com sucesso!`);
    }
  
    removerContato(nome) {
      this.contatos = this.contatos.filter((c) => c.nome !== nome);
      console.log(`Contato ${nome} removido com sucesso!`);
    }
  
    listarContatos() {
      if (this.contatos.length === 0) {
        console.log("Nenhum contato na lista.");
        return;
      }
      this.contatos.forEach((contato, index) => {
        console.log(`${index + 1}. ${contato.nome} - ${contato.telefone} - ${contato.email}`);
      });
    }
  }
  
  module.exports = GerenciadorContatosBase;
  