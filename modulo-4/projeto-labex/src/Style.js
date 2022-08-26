import styled from "styled-components"

export const Trip=styled.div`
    border:2px  darkviolet ;
    border-style: dashed;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    padding: 20px;
    width: max-content;
    border-radius: 15px;
    margin-top: 10px;
    h1{
        text-transform: uppercase;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    `
    export const TPage=styled.div`
    width: max-content;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: 3px solid darkorange;
    justify-content: stretch;
    align-items: center;
    `

export const MyForm=styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 400px;
    padding: 20px;
    border: 2px solid blue;
    border-radius: 15px;
    input{
        font-size: 16px;
        padding: 5px;
        border: 1px solid black;
        background: lightcyan;
        margin: 4px 0 4px 0;
        font-weight: bold;
    }

`
export const MyDiv=styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: max-content;


`
export const MyButton=styled.button`
        padding:5px ;
        width: 100%;
        margin: 5px;
        background: blue;
        font-weight: bold;
        text-transform: uppercase;
        color: white;
        font-size:15px ;
        border-radius: 5px;
        text-shadow: 1px 1px 2px black;
        :hover{
            background-color: lightcoral;
        }
`