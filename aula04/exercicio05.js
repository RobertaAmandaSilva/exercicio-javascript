const leia = require("readline-sync");

let matriz = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = leia.questionInt(`Digite o valor da posicao [${i}][${j}]: `);

        if (i === j) {
            somaPrincipal += matriz[i][j];
        }

        if (i + j === 2) {
            somaSecundaria += matriz[i][j];
        }
    }
}

console.log("Elementos da Diagonal Principal:");
console.log(matriz[0][0], matriz[1][1], matriz[2][2]);

console.log("Elementos da Diagonal Secundária:");
console.log(matriz[0][2], matriz[1][1], matriz[2][0]);

console.log(`Soma da Diagonal Principal: ${somaPrincipal}`);
console.log(`Soma da Diagonal Secundária: ${somaSecundaria}`);
