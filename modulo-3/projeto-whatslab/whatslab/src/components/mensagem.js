import React, { useState } from 'react'
import { CampoMensagem, InputsMsg } from '../style'



const Mensagem=()=>{
    const [itens,setItens]=useState([{user:"",message:""}
    ])
    const itensNaLista=itens.map((item, index)=>{
        return(
            <CampoMensagem key={index}>
                <p><b>{item.user}</b></p>
                <p>{item.message}</p>
                <button onClick={()=>deleteMessage(index)}>x</button>
            </CampoMensagem>
        )
    })
  
    const[inputUser, setInputUser] = useState("");
    const[inputMessage, setInputMessage] = useState("");

    const addUser = (e)=>{
        setInputUser(e.target.value)
    }
    const addMessage = (e)=>{
        setInputMessage(e.target.value)
    }
    const adicionar =(e)=>{
        e.preventDefault()
        const listaMensagens=[...itens,{user:inputUser,message:inputMessage}]
        setItens(listaMensagens)
        setInputUser("")
        setInputMessage("")
    }

    const deleteMessage=(indexDelete)=>{
        const listaMensagens=itens.filter((item,index)=>{
            return index!==indexDelete
        })
        setItens(listaMensagens)
    }


    
    return(
    <>
        
        {itensNaLista}
        <InputsMsg>
        <input className='inputName' type="text" required placeholder='Nome' value={inputUser} onChange={addUser}></input>
        <input className='inputMsg' type="text" required placeholder='Mensagem' value={inputMessage} onChange={addMessage}></input>
        <button onClick={adicionar}>Enviar</button>
        </InputsMsg>
        

    </>
  
  )
}


export default Mensagem