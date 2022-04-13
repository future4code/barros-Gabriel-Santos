let a = 10 
let b = 10 

console.log(b) 

b = 5   
console.log(a, b) 
// Resultado 10, 10, 5

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) // Resultado 10, 10, 10 . Pois todas variaveis são iguais 

let p = prompt ("Quantas horas você trabalha por dia?") //let horasDia = prompt ("Quantas horas você trabalha por dia?") 
let t = prompt("Quanto você recebe por dia?") // let dinheiroDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`) 