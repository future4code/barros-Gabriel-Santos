import { useState } from 'react';
import './App.css';
import MensagemEnviada from './Components/mensagem';



function App() {
  
  const [messageUser,setMessageUser] = useState();
  const [message, setMessage] = useState()

  function handleAddMessage(){
    const newMessage= {
      nome: messageUser,
      mensagem: message,
    }

    setMessage([newMessage])
  }


  return (
    <div className="App">
      <input type= "text" 
      placeholder= "Nome" 
      onChange={e => setMessageUser(e.target.value)}/>
      <input type= "text" 
      placeholder= "Mensagem" 
      onChange={e => setMessage(e.target.value)}/>
      <button type="button" onClick={handleAddMessage}>Enviar</button>
      {
        message.map(mensagens=> <MensagemEnviada nome={mensagens.nome} mensagens={mensagens.mensagem}/>)
      }
    </div>
  );
}

export default App;
