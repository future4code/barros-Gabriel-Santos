

function MensagemEnviada(props){
    return(
        <div>
            <p><b>{props.nome}</b></p>
            <p>{props.mensagem}</p>
        </div>
    )
}

export default MensagemEnviada