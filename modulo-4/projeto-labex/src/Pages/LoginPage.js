import React from "react";
import * as S from "../Style"

export function LoginPage() {

    return(
        <S.MyForm>
            <h1>Login</h1>
            <input 
                name="email"
                id="email"
                placeholder="E-mail"
                type="email"
                required
                />
            <input
                name="password"
                id="senha"
                placeholder="Senha"
                type="password"
                pattern="^.{3,}$"
                title="mínimo de 3 caracteres"
                required

            />
        </S.MyForm>

    )
}