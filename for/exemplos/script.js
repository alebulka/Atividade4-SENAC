var alunos= [];
var notas= [];
for (i=1; i<=4; i++) {
    alunos.push(prompt(`Nome do ${i}º aluno:`))
    notas.push(parseFloat(prompt(`Nota do ${i}º aluno:`)))
}
document.write(`Alunes cadastrades: ${alunos} <br> Notas cadastradas: ${notas}`)