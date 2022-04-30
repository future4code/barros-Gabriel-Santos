/* Exercícios de interpretação de código

QUESTÃO 1   

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
console.log(filme.transmissoesHoje[2]) //canal: Globo, horario: 14h

QUESTÃO 2 

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // nome: "Juca", idade: 3, raca: "SRD"
console.log(gato) //nome: "Juba", idade: 3, raca: "SRD"
console.log(tartaruga) // nome: "Jubo", idade: 3, raca: "SRD"

QUESTÃO 3  

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

A) FALSE E ERRO
B) ALTURA NÃO É PROPRIEDADE  



* Exercícios de escrita de código

EXERCICIO 1     

a)     

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
 console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`);

 b)

 const pessoa2 = {...pessoa, apelidos: ["Manda", "Mandoca", "Man"]}

 console.log(`Eu sou ${pessoa2.nome}, mas pode me chamar de: ${pessoa2.apelidos[0]}, ${pessoa2.apelidos[1]} ou ${pessoa2.apelidos[2]}`);




EXERCICIO 2

 const pessoa = {
	nome: "Bruno", 
    idade: 23, 
	profissao: "Instrutor"
}
console.log(pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length);
minhaFuncao(pessoa)



EXERCICIO 3      

const carrinho = []
let frutas = {
    fruta1: {
        nome: "banana",
        diponibilidade: true
    },
    fruta2: {
        nome: "uva",
        diponibilidade: true
    },
    fruta3: {
        nome: "banana",
        diponibilidade: true
    }
}
carrinho.push(frutas)
console.log(carrinho)  
 //////////////////////////////////////////
 */

