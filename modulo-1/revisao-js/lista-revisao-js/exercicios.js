// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b)=> a-b)
        
}
   
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((Number)=> Number % 2 === 0)
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((Number)=> Number % 2 === 0).map((Number)=>Number*Number)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const primeiroNumero=Math.max(num1,num2)
    const segundoNumero=Math.min(num1,num2)  
    const numero={
        maiorNumero:primeiroNumero,
        maiorDivisivelPorMenor:primeiroNumero%segundoNumero===0,
        diferenca:primeiroNumero-segundoNumero
    }
    return numero

    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numero=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]
    return numero.slice(0,n)
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA===ladoB && ladoA===ladoC && ladoB===ladoC){
        return "Equilátero"
    }else if(ladoA!==ladoB && ladoA===ladoC || ladoB!==ladoC && ladoB===ladoA || ladoC!==ladoA && ladoC===ladoB){
        return "Isósceles"
    }else(ladoA!==ladoB && ladoA!==ladoC && ladoB!==ladoC)
        return "Escaleno"
        
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let menorNum= Math.min(...array)
  let maiorNum= Math.max(...array)
  let segundoMenor=menorNum +1
  let segundoMaior=maiorNum + 1
  return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}