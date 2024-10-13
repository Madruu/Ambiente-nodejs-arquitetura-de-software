const Aluno = function(nome, login, ra){
    this.nome = nome;
    this.login = login;
    this.ra = ra;

    this.getInfo = () => {
        return `Aluno: ${this.nome}, Login: ${this.login}, RA: ${this.ra}`;
    }
}


module.exports = Aluno;