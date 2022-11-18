var email =  window.prompt("Digite seu e-mail:");
var idade = parseInt(window.prompt("Digite sua idade:"));
var senha =  window.prompt("Digite sua senha:");
var confirmaSenha =  window.prompt("Confirme sua senha:");

if (senha == confirmaSenha) {
    if (senha.length == 8 && confirmaSenha.length == 8) {
        while (idade < 18) {
            window.alert("Impossível cadastrar por ser menor de idade");
            idade ++
        }
    } else {
        window.alert("Senha precisa de 8 caracteres");
    }
} else {
    window.alert(" Senhas não correspondem");
}
