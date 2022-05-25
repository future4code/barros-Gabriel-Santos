```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let salarioFixo = 2000
 let comissao = (5/100*valorTotalVendas) +100
 let calculaSalario = salarioFixo+comissao
 return calculaSalario
}