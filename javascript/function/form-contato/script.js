

function validar(){
    if (document.dados.nome.value == " ") {
        window.alert("Digite seu nome")
        document.dados.nome.focus() 
        // .focus() -> vai focar naquele elemento até ele ser realizado
        return false
    }
    if (document.dados.nome.value.lenght <3) {
        window.alert("Digite o nome com mais de 3 caracteres")
        document.dados.nome.focus() 
        return false
    }
    if (document.dados.email.value == " ") {
        window.alert("Digite o seu e-mail")
        document.dados.email.focus() 
        return false
    }
    if (document.dados.email.value.indexOf("gmail")== -1 || document.dados.email.value.indexOf("outlook")== -1) {
        window.alert("E-mail inválido")
        document.dados.email.focus() 
        return false
    }
}