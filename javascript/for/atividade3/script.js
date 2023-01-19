for (i=3; i>=1; i--) {
    var user = window.prompt("Digite o seu nome de usuário.")
    var senha = window.prompt("Digite a senha")
    if(user == "admin" && senha == 123){
        var senha_aceita = true
        var user_aceito = true
        break
    } else{
        window.alert(`Usuário ou senha incorretos. Você possui ${i} tentativa(s) restante(s)`)
    }
}
if(user_aceito == true && senha_aceita ==true){
    alert("Acesso liberado")
}else{
    window.alert("Acesso bloqueado")
}