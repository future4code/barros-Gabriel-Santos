import styled from 'styled-components'

export const Form1=styled.div`
    
    display: grid;
    grid-template-rows: 1fr ;
    justify-items: center;
    width: 600px;
    height:300px ;
    margin-left: 30%;
    margin-top:100px;

    
    
    div{
        display: grid;
        width:450px;
        border-style: solid;
        padding: 5px;
        margin: 5px;
       
        input{
            heigth: 10px;
            padding: 5px;
            margin: 5px;
            border-style: solid;
            
        }

    }
    
    button{
        width: 200px;
        heigth: 30px;
        padding: 5px;
        margin-top: 5px;
        background: orange;
        border-radius: 10%;

    }
`
