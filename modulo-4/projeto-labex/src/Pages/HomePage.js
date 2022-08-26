import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "../Style"



function Home() {
    const navigate = useNavigate();

    const goToApplicationForm=()=>{
        navigate("/application-form")
    }
    const goToAdminHomePage=()=>{
      navigate("/admin-home-page")
  }

  return (
    <S.MyForm>
      <h1>LabeX</h1>
      <S.MyButton onClick={goToApplicationForm}>Inscreva-se</S.MyButton>
      <S.MyButton onClick={goToAdminHomePage}>Àrea de Admin</S.MyButton>
    </S.MyForm>
    
  );
}

export default Home;