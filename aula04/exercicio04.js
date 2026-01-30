const leia = require("readline-sync");

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let encontrado = false;

let numero = leia.questionInt("Digite o número que deseja encontrar: ");

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        console.log(`O número ${numero} está localizado na posição: ${i}`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("O número não foi encontrado!");
}
