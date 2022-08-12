import React, {useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [useProfile, setUseProfile]=useState([])

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose=()=>{
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-santos-barros/person")
    .then((response)=>{
      console.log(response.data);
      setUseProfile(response.data.result.bio)
    })
    .catch((erro)=>{
      console.log(erro.response.data);
    })
  }
  
 

  return (
    <>
      <h1>Olá!</h1>
      <h2>Não consegui imprimir as Apis!</h2>
      
      {useProfile.map((perfil)=>{
        return (
          <div>key={perfil.id}{perfil.profile}</div>
          )

      })}
    </>
  );
}

export default App;
