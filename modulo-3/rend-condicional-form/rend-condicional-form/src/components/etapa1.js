import React from 'react'
import { Form1 } from '../style'




function Etapa1() {


 
    return(
    <Form1>
        <h1>ESTAPA 1 - DADOS GERAIS</h1>
        <div>
            <p><b>1- Qual seu nome?</b></p>
            <input typeof='text' placeholder='Nome'></input>
        </div>
        <div>
            <p><b>2 - Qual seu idade?</b></p>
            <input typeof='text' placeholder='Nome'></input>
        </div>
        <div>
            <p><b>3 - Qual seu e-mail?</b></p>
            <input typeof='email' placeholder='Nome'></input>
        </div>
        <div>
            <p><b>4 - Qual sua escolaridade?</b></p>
            <input typeof='search' placeholder='Escolaridade'>
                
                
            </input>
         </div>
        <button>Enviar</button>
        
        
        
    </Form1>
    

 )
}

export default Etapa1

