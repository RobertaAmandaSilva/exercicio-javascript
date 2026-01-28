const leia = require("readline-sync")
let nota1 = leia.questionFloat("nota 1 :")
let nota2 = leia.questionFloat('nota 2: ')
let nota3 = leia.questionFloat('nota 3: ')
let nota4 = leia.questionFloat('nota 4: ')
let media = (nota1 + nota2 + nota3 + nota4 )/4
console.log(media.toFixed(1))
