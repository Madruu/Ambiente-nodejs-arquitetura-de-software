const Aluno = require('./models/Aluno');
const Turma = require('./models/Turma');
const TurmaPresencial = require('./models/TurmaPresencial');

const aluno = new Aluno("Vitor", "VitorTulio", "a2346621");
console.log(`Aluno: ${aluno.nome}, Login: ${aluno.login}, RA: ${aluno.ra}`);

const turma = new Turma("ES46A", 10);
console.log(`Turma: ${turma.codigo}, Nota: ${turma.nota}, Aprovado: ${turma.aprovado()}`);

const turmaPresencial = new TurmaPresencial("ES46A", 10, 100);
console.log(`Turma Presencial: ${turmaPresencial.codigo}, Nota: ${turmaPresencial.nota}, Frequência: ${turmaPresencial.frequencia}%, Aprovado: ${turmaPresencial.aprovado()}`);
