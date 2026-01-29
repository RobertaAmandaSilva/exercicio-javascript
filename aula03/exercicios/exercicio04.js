const leia = require("readline-sync")

// Saldo inicial
let saldo = 1000.00;

// Entrada da operação
let operacao = leia.questionInt("Operacao: ");

let valor;

// Laço condicional SWITCH
switch (operacao) {
    case 1:
        console.log("\nOperacao - Saldo");
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
        break;

    case 2:
        valor = leia.questionFloat("Valor: R$ ");
        console.log("\nOperacao - Saque");

        if (valor <= saldo) {
            saldo -= valor;
            console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        } else {
            console.log("Saldo Insuficiente!");
        }
        break;

    case 3:
        valor = leia.questionFloat("Valor: R$ ");
        console.log("\nOperacao - Deposito");

        saldo += valor;
        console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        break;

    default:
        console.log("\nOperacao Invalida!");
}









