

function validar(){
    if (document.dados.nome.value == "Alessandra") {
        window.alert("Bem vinda Alessandra")
        document.dados.nome.focus() 
        // .focus() -> vai focar naquele elemento até ele ser realizado
    } else {
        window.alert('parece q não é vc que tá entrando')
    }
}