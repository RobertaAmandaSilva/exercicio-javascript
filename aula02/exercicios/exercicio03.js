const leia = require("readline-sync")
let salarioBruto = leia.questionFloat('Digite o salario Bruto:')
let adicionalNoturno = leia.questionFloat('Digite o adicional noturno:')
let horasExtras = leia.questionFloat('Digite  horas extras: ')
let desconto = leia.questionFloat('Digite o desconto:')
 let salarioliquido = salarioBruto + adicionalNoturno + (horasExtras*5) - desconto
 console.log(new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(salarioliquido))