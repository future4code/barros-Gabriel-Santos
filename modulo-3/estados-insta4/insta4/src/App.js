import React from 'react';
import Post from './components/Post/Post';
import './style.css'


const Post1=()=>{
  const arrayUsuarios=[
          {nomeUsuario:"Paulinha",
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/150'
        },
        {
          nomeUsuario:"Gabriel",
          fotoUsuario:'https://picsum.photos/50/51',
          fotoPost:'https://picsum.photos/200/151'
        },
        {
          nomeUsuario:"João",
          fotoUsuario:'https://picsum.photos/50/52',
          fotoPost:'https://picsum.photos/200/152'
        },
        ]
        let arrayComponentes=arrayUsuarios.map((elemento,index)=>{
          return (
              <Post key={elemento.index} nomeUsuario={elemento.nomeUsuario} fotoUsuario={elemento.fotoUsuario} fotoPost={elemento.fotoPost}>
        
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
