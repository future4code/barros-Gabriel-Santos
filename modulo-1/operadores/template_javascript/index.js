// EXERCÍCIO 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 //false
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 //false
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) //true
console.log("c. ", resultado)

console.log("d. ", typeof resultado)// boolean

// EXERCÍCIO 2

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)*/
 
/* O PROMPT ESTÁ RECEBENDO VALOR DE VARIAVEL STRING 
ELA TEM QUE SER TRANSFORMADA EM NUMBER 
LOGO VAI FICAR: */

/*let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

 =====EXERCICIO CRIAR PROGRAMA 1=====   

let suaIdade = Number (prompt(" Digite sua idade"))
let idadeAmigo = Number (prompt(" Digite a idade do seu amigo"))
let diferencaIdade = suaIdade - idadeAmigo
let maiorIdade = suaIdade > idadeAmigo

console.log ("Sua idade é", suaIdade)
console.log ("A idade do seu amigo é", idadeAmigo)
console.log ("A direrença de idade é", diferencaIdade)
console.log ("Sua idade é maior do que a do seu amigo?", maiorIdade)

=====EXERCICIO CRIAR PROGRAMA 2===== 

const numeroPar = Number (prompt("Digite um numero par"))
const dividir = 2

resultado = numeroPar % dividir

console.log ("O resto da divisão é", resultado)

Resposta C - O resultado do resto da divisão de numero par por 2 é sempre 0
Resposta D - O resultado do resto da divisão de numero impar por 2 é sempre 1 

=====EXERCICIO CRIAR PROGRAMA 3===== 

let idadeUsuario = Number (prompt("Qual a sua idade?"))
let idadeMeses = idadeUsuario * 12
let idadeDias = idadeUsuario * 365
let idadehoras= idadeUsuario * 8760

console.log ("Você tem", idadeMeses, "meses de vida")
console.log ("Você tem", idadeDias, "dias de vida")
console.log ("Você tem", idadehoras, "horas de vida")
 
=====EXERCICIO CRIAR PROGRAMA 4===== */

let numero1 = Number (prompt("Digite um numero par de 6 a 10"))
let numero2 = Number (prompt("Digite um numero par menor que 5"))
let primeiroMaior = numero1 > numero2
let primeiroIgual = numero1 === numero2
let primeiroDivide = (numero1 / numero2) < 6
let segundoDivide = (numero2 / numero1) < 6

console.log (primeiroMaior)
console.log (primeiroIgual)
console.log (primeiroDivide)
console.log (segundoDivide)












