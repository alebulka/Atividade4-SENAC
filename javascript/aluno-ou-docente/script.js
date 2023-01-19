// Variaveis de form
var user = window.prompt("Digite seu user (considere 'aluno/docente/admin/secretaria/convidado'):");
var senha = window.prompt("Digite sua senha (considere user):");

// if else
if (user = senha) {
    if (user = "aluno" || "Aluno" || "ALUNO") {
        window.confirm("Bem vindo Aluno!");
    } else if (user = "docente" || "Docente" || "DOCENTE"){
        window.confirm("Bem vindo professor!");
    } else if(user = "admin" || "Admin" || "ADMIN"){
        window.confirm("Bem vinda pessoa administradora!");
    } else if(user = "secretaria" || "Secretaria" || "SECRETARIA"){
        window.confirm("Bem vinda pessoa da secretaria!");
    } else if(user = "convidado" || "Convidado" || "CONVIDADO"){
        window.confirm("Bem vindo convidado!");
    } else {
        window.confirm("Acesso negado");
    }
} else {
    window.confirm("Acesso negado");
}