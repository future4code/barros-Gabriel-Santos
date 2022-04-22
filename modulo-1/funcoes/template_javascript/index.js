/*---------Exercícios de interpretação de código

QUESTÃO 1:   

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

/*  A) NÃO IMPRIMIU NADA POIS, A FUNÇÃO NÃO FOI INVOCADA
    B) ERRO


QUESTÃO 2:  

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
 
/*  A) INDICA SE NO TEXTO TEM A PALAVRA CENOURA COM RESPOSTA TRUE OU FALSE
    B) I - TRUE
       II- TRUE
       III - TRUE 

---------------Exercícios de escrita de código

QUESTÃO 1:             

function quemSouEu() {
    console.log("Eu sou Gabriel, tenho 30 anos, moro em Piatã-Ba e sou estudante Labenu");
}
quemSouEu()



function quemEvoce(nome,idade,endereco,profissao) {
    nome = prompt ("Qual seu nome?")
    idade = Number(prompt("Qual sua idade?"))
    endereco = prompt("Onde você mora?")
    profissao = prompt("Qual sua profissão?")

    console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou " + profissao);

}

quemEvoce()

QUESTÃO 2:                             

function somaNumeros(numero1, numero2) {
    numero1 = Number(prompt("Digite um numero"))
    numero2 = Number(prompt("Digite outro numero"))
    soma = numero1 + numero2
    console.log(soma);
    
}
  somaNumeros()  

  QUESTÃO 3:                 

  function calcularNumeros(number1, number2) {
    number1 = Number(prompt("Digite um numero"))
    number2 = Number(prompt("Digite outro numero menor"))
    soma = number1 + number2
    diferenca = number1 - number2
    multiplicacao = number1 * number2
    divisao = number1 / number2
    console.log("Números digitados: "+number1+" e "+number2 );
    console.log("Soma: "+soma);
    console.log("Diferença: "+diferenca);
    console.log("Multiplicação: "+multiplicacao);
    console.log("Divisão: "+divisao);
  }
   
calcularNumeros() 

DESAFIO 

QUESTÃO 2:            */

function hipotenusa(a,b) {
    a = Number(prompt("digite um cateto"))
    b = Number(prompt("digite outro cateto"))
    somaCatetos = ((a * a) + (b * b))
    resultado = Math.sqrt(somaCatetos)
    console.log(resultado);
}
 hipotenusa()             







    



