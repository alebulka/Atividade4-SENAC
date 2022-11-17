// calculadora simples
var contador=1;
var numTabuada = parseInt(window.prompt('Digite um número'));
// Multiplicação
var multiplicacao = numTabuada * contador;
if (numTabuada) {
    while (contador <= 10) {
        document.write(`${numTabuada} x ${contador} = ${multiplicacao} <br>`);
        contador++
    }    
} else {
    window.alert("impossivel calcular")
}