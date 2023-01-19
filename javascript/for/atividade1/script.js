do{
var cartao =  parseInt(window.prompt("Digite o número do seu cartão:"));
var bandeira =  window.prompt("Qual a bandeira?");
var val =  window.prompt("Data de validade:");
var cod =  window.prompt("Código de segurança:");
var nome = window.prompt("Nome do titular do cartão:");
var nomeUpper = nome.toUpperCase();
var cpf =  window.prompt("CPF do titular:");

var choice = window.prompt("Escolha uma opção (1 ou 2): \n 1 - vizualizar dados cadastrados \n 2 - Realizar novo preenchimento");

} while (choice == '2');

window.alert(`Seus dados: \n
Número do cartão: ${cartao} \n
Bandeira: ${bandeira} \n
Data de validade: ${val} \n
Código de segurança: ${cod} \n
Nome do titular do cartão: ${nomeUpper} \n
CPF do titular do cartão: ${cpf} \n
`)
