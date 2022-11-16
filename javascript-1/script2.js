// dados de login
var user = window.prompt("Digite o seu nome de usuário:");
var senha = window.prompt("Digite a sua senha:");

if (user && senha === "admin" || user && senha === "admin22") {
    window.alert("Acesso liberado para cadastro de produtos");

    // dados de produto 1
    var prod1 = window.prompt("Nome do Produto 1");
    var estoque1 = parseInt(window.prompt(`Quantidade do produto ${prod1} em estoque:`));
    var preco1 = parseInt(window.prompt(`Valor do produto ${prod1}:`));
    var total1 = estoque1*preco1;

    document.write(`Esses são os dados do produto 1:`);
    document.write(`Produto: ${prod1}`);
    document.write(`Quantidade em estoque: ${estoque1}`);
    document.write(`Valor do produto: ${preco1}`);
    document.write(`Total: ${total1}`);

    // dados de produto 2
    var prod2 = window.prompt("Nome do Produto 2");
    var estoque2 = parseInt(window.prompt(`Quantidade do produto ${prod2} em estoque:`));
    var preco2 = parseInt(window.prompt(`Valor do produto ${prod2}:`));
    var total2 = estoque2*preco2;

    document.write(`Esses são os dados do produto 2:`);
    document.write(`Produto: ${prod2}`);
    document.write(`Quantidade em estoque: ${estoque2}`);
    document.write(`Valor do produto: ${preco2}`);
    document.write(`Total: ${total2}`);
} else {
    window.alert("Acesso negado");
}

