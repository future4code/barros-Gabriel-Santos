import React from "react";
import {useNavigate} from 'react-router-dom'


function Home(){

  const navigate= useNavigate;

  const goToAbout=()=>{
   navigate("/signUp")

  }
  
  return (
    <section>
      <h1>Home</h1>
      <button onClick={goToAbout}>Sobre</button>
    </section>
    
  );
}

export default Home();