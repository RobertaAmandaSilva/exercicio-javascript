const leia = require("readline-sync")

let numero = leia.questionInt("Digite um numero: ");

let parOuImpar;
if (numero % 2 === 0) {
    parOuImpar = "par";
} else {
    parOuImpar = "ímpar";
}
let sinal;
if (numero >= 0) {
    sinal = "positivo";
} else {
    sinal = "negativo";
}
console.log(`\nO Número ${numero} é ${parOuImpar} e ${sinal}!`);