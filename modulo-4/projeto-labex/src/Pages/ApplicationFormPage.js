import React from 'react';
import * as S from "../Style"

function ApplicationForm() {
  return (
    <div>
        <h1>Inscreva-se para uma viagem</h1>
        <S.MyForm>
            <input placeholder='Escolha uma viagem'></input>
            <input placeholder='Nome'></input>
            <input placeholder='Idade'></input>
            <input placeholder='Texto de candidatura'></input>
            <input placeholder='Profissão'></input>
            <input placeholder='Escolher país'></input>
            <S.MyDiv>
              <S.MyButton>Voltar</S.MyButton>
              <S.MyButton>Enviar</S.MyButton>
            </S.MyDiv>
        </S.MyForm>
    </div>
      
  );
}

export default ApplicationForm;