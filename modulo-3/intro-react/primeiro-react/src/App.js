import logo from './Minha_foto.jpg';
import './App.css';
function mensagem(){
  alert ("Boa noite")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá! Eu sou Gabriel Vieira!</h1>
        <img src={logo} alt="Imagem Labenu"/>
        <h3>Este é o meu primeiro site React</h3>
        <button onClick={mensagem}>Aperte esse botão</button>
      </header>
    </div>
  );
}

export default App;
