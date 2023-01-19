// Dados do aluno
var nome = window.prompt("Digite o nome do aluno:")
var sala = window.prompt("Digite a sala:")

// Notas primeira disciplina
var d1b1 = parseInt(window.prompt("Disciplina 1, 1° bimestre--  Digite aqui a nota do aluno"))
var d1b2 = parseInt(window.prompt("Disciplina 1, 2° bimestre --  Digite aqui a nota do aluno"))
var d1b3 = parseInt(window.prompt("Disciplina 1, 3° bimestre --  Digite aqui a nota do aluno"))
var d1b4 = parseInt(window.prompt("Disciplina 1, 4° bimestre --  Digite aqui a nota do aluno"))

// Notas segunda disciplina
var d2b1 = parseInt(window.prompt("Disciplina 2, 1° bimestre --  Digite aqui a nota do aluno"))
var d2b2 = parseInt(window.prompt("Disciplina 2, 2° bimestre --  Digite aqui a nota do aluno"))
var d2b3 = parseInt(window.prompt("Disciplina 2, 3° bimestre --  Digite aqui a nota do aluno"))
var d2b4 = parseInt(window.prompt("Disciplina 2, 4° bimestre --  Digite aqui a nota do aluno"))

// media das notas
var media1 =(d1b1 + d1b2 + d1b3 + d1b4)/4
var media2 =(d2b1 + d2b2 + d2b3 + d2b4)/4

// confirmação das notas
window.confirm(`Esses são os seus dados: \n
Nome do aluno: ${nome} \n
Sala: ${sala} \n \n
Disciplina 1: \n
1° Bimestre: ${d1b1} \n
2° Bimestre: ${d1b2} \n
3° Bimestre: ${d1b3} \n
4° Bimestre: ${d1b4} \n
\n \n
Disciplina 2:
1° Bimestre: ${d2b1} \n
2° Bimestre: ${d2b2} \n
3° Bimestre: ${d2b3} \n
4° Bimestre: ${d2b4} \n \n
`)

// ifelse das notas

// disc 1
if (media1 >= 70) {
    alert("Aluno aprovado por nota na disciplina 1")
}
else {
    alert("Aluno reprovado por nota na disciplina 1")
}
// discp 2
if (media2 >= 70) {
    alert("Aluno aprovado por nota na disciplina 2")
}
else {
    alert("Aluno reprovado por nota na disciplina 2")
}


// Faltas
// primeiro bi
var d1b1faltas = parseInt(window.prompt("Disciplina 1, 1° bimestre --  Digite aqui a quantidade de faltas do aluno"))
var d1b2faltas = parseInt(window.prompt("Disciplina 1, 2° bimestre --  Digite aqui a quantidade de faltas do aluno"))
var d1b3faltas = parseInt(window.prompt("Disciplina 1, 3° bimestre --  Digite aqui a quantidade de faltas do aluno"))
var d1b4faltas = parseInt(window.prompt("Disciplina 1, 4° bimestre --  Digite aqui a quantidade de faltas do aluno"))
// segundo bi
var d2b1faltas = parseInt(window.prompt("Disciplina 2, 1° bimestre --  Digite aqui a quantidade de faltas do aluno"))
var d2b2faltas = parseInt(window.prompt("Disciplina 2, 2° bimestre --  Digite aqui a quantidade de faltas do aluno"))
var d2b3faltas = parseInt(window.prompt("Disciplina 2, 3° bimestre --  Digite aqui a quantidade de faltas do aluno"))
var d2b4faltas = parseInt(window.prompt("Disciplina 2, 4° bimestre --  Digite aqui a quantidade de faltas do aluno"))
// confirmação das faltas
window.confirm(`Essa é a quantidade de faltas que o aluno teve: \n
Nome do aluno: ${nome} \n
Sala: ${sala} \n \n
Disciplina 1: \n
1° Bimestre: ${d1b1faltas} \n
2° Bimestre: ${d1b2faltas} \n
3° Bimestre: ${d1b3faltas} \n
4° Bimestre: ${d1b4faltas} \n
\n \n
Disciplina 2:
1° Bimestre: ${d2b1faltas} \n
2° Bimestre: ${d2b2faltas} \n
3° Bimestre: ${d2b3faltas} \n
4° Bimestre: ${d2b4faltas} \n \n
`)

// media de faltas
var mediaF1 =(d1b1faltas + d1b2faltas + d1b3faltas + d1b4faltas)
var mediaF2 =(d2b1faltas + d2b2faltas + d2b3faltas + d2b4faltas)

// ifelse das faltas
if (mediaF1 && mediaF2 <= 12) {
    alert("Aluno aprovado por faltas")
}
else {
    alert("Aluno reprovado por faltas")
}