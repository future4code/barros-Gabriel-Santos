import React from 'react';
import Post from './components/Post/Post';
import './style.css'


const Post1=()=>{
  const arrayUsuarios=[
          {nomeUsuario:"paulinha",fotoUsuario:'https://picsum.photos/50/50',fotoPost:'https://picsum.photos/200/150'},
          {nomeUsuario:"Gabriel",fotoUsuario:'https://picsum.photos/50/50',fotoPost:'https://picsum.photos/200/150'},
        ]
        let arrayComponentes=arrayUsuarios.map((elemento,index)=>{
          return (
              <Post key={index}>
                {elemento.nomeUsuario}
                {elemento.fotoUsuario}
              </Post>
    
            
          )
        })
        return(
          <>
          {arrayComponentes}
          </>
        )
     }

function App() {
return(
  <div className='MainContainer'>
     <Post1/>
  </div>

)

}


export default App;
