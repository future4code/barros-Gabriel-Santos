// A)

//const minhaString: string = 21
// number não pode ser atribuido a string


// B)

const meuNumero:number|string= "Gabriel"

// C) 

type pessoa= {
    name:string,
    idade: number,
    corFavorita: string,
}

enum corFavorita {
    AZUL="Azul",
    VERDE= "Verde",
    AMARELO= "Amarelo",
}

const pessoa1 : pessoa = {
    name:"Gabriel",
    idade:31,
    corFavorita: "Azul"
}