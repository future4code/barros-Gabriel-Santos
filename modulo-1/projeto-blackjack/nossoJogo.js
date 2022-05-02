

   console.log("Bem vindo(a) ao jogo de Blackjack!");
   const iniciarJogo = confirm("Quer iniciar uma nova rodada?")

   if (iniciarJogo===true){
      const usuarioCarta1 = comprarCarta()
      const usuarioCarta2 = comprarCarta() 
      const computadorCarta1 = comprarCarta()
      const computadorCarta2 = comprarCarta()
     
      console.log("Usuário - cartas: ",usuarioCarta1.texto, usuarioCarta2.texto,"- pontuação ",(usuarioCarta1.valor + usuarioCarta2.valor));
      console.log("Computador - cartas: ",computadorCarta1.texto, computadorCarta2.texto, "- pontuação ",(computadorCarta1.valor + computadorCarta2.valor));
      
      let cartasUsuario = usuarioCarta1.valor+usuarioCarta2.valor 
      let castasComputador = computadorCarta1.valor+computadorCarta2.valor
      if (cartasUsuario===castasComputador){
         console.log("Empate!");
      }else if(cartasUsuario>castasComputador){
         console.log("O usuário ganhou!");
      }else{
         console.log("O computador ganhou!");
      }

   }else{
      console.log("O jogo acabou!");
   }
 

   
   
  

  
