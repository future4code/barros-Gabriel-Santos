import React, { useState } from 'react';
import axios from 'axios';


function App() {

  const [useProfile, setUseProfile]=useState([])

  const getProfileToChoose=()=>{
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-santos-barros/person")
    .then((response)=>{
      console.log(response.data);
      setUseProfile(response.result.data.profile)
    })
    .catch((er)=>{
      console.log(er.response.data);
    })
  }
  
  getProfileToChoose()

  return (
    <div className="App">
      <h1>Olá </h1>
      {useProfile.map((perfil)=>{
        return (
          <li key={perfil.id}>{perfil.profile}</li>
          )

      })}
    </div>
  );
}

export default App;
