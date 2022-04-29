/* 
Exercícios de interpretação de código

EXERCÍCIO 1 

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Pede ao usuario digitar um número. Esse numero é divido por 2 e o resto tem que ser igual a 0
para passar no teste, se for diferente não passa!
b) Numeros pares
c) Numeros impares 

EXERCÍCIO 2                

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
/*
a) Ele imprime o preço da fruta, que o usuario digitou
b) O preço da maçã é R$ 2.25
c) O preço da Pêra é R$ 5


EXERCÍCIO 3           

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) Pede ao usuario digitar um numero
b) Esse número passou no teste. 
c) subistituir:
let mensagem = "Essa mensagem é secreta!!!"
por:
}else{
    mensagem = "Essa mensagem é secreta!!!"
}

-------------------------------------------

Exercícios de escrita de código

EXERCÍCIO 1   

const idade = Number(prompt("Qual sua idade?"))

if(idade>=18){
    console.log("Você pode dirigir");
}else{
    menssagem = "Você não pode dirigir"
}
console.log(menssagem)


EXERCÍCIO 2 

let turno = prompt(" Digite M para matutino, V para vespertino e N para noturno")

if(turno==="M"){
    console.log("Bom dia");
}else if(turno==="V"){
    console.log("Boa tarde");
    }else{(turno==="T")
        console.log("Boa noite")
    
}


EXERCÍCIO 3 

let turno = prompt(" Digite M para matutino, V para vespertino e N para noturno")

function qualTurno(turno){
    switch(turno){
        case "M":
            return "Bom dia"
            break
        case "V": 
            return "Boa tarde"   
            break
        case "N": 
            return "Boa noite"
    
    }
}
console.log(qualTurno(turno));


EXERCÍCIO 4 

const filme=prompt("Qual gênero de filme você vai assitir?")
const ingresso=Number(prompt("Qual valor do ingresso?"))

function cinema(filme,ingresso){
    if (filme==="fantasia" && ingresso<15){
        return "Bom filme"
    }else{ 
        return "escolha outro filme :("
    }
}

console.log(cinema(filme,ingresso));


---------------------------------------------

*DESAFIOS 

1:              */

const filme=prompt("Qual gênero de filme você vai assitir?")
const ingresso=Number(prompt("Qual valor do ingresso?"))

function cinema(filme,ingresso){
    if (filme!=="fantasia" && ingresso<15){
        return "escolha outro filme :("
    }else{
        lanche=prompt["Qual snack que você quer comprar?"]
    }
        
}
    
   

console.log(cinema.ingresso("Bom filme! Aproveite o seu "+ $[0]));

