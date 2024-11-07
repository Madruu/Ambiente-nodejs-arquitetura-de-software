const Turma = require('./Turma.js');

const TurmaPresencial = function(codigo, nota, frequencia){
    Turma.call(this, codigo, nota);
    
    this.frequencia = frequencia;

    this.aprovado = () => {
        return this.nota >= 6 && this.frequencia >= 75;
    }

}

module.exports = TurmaPresencial;