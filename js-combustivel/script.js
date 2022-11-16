var escolha = window.prompt("escolha o combustível (considere 'gasolina/ álcool/ diesel'):");


switch (escolha) {
    case gasolina:
        window.confirm("Gasolina, obrigada pela preferência");
        break;
    case álcool:
        window.confirm("Álcool, obrigada pela preferência");
        break;
    case diesel:
        window.confirm("Diesel, obrigada pela preferência");
        break;
    default:
        window.alert("Opção inválida");
        break;
}