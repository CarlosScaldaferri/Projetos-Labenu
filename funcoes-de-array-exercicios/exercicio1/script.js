
// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto (o objeto está pronto no arquivo JS).
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que os **valores** deste objeto fiquem em CAIXA ALTA.
// saída esperada:

// `{ nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username: 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'}`

// 2. A segunda deve retornar os valores do objeto como texto corrido.

// 3. Em seguida, crie uma funcão que recebe o objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir
//o valor retornado.

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

let objetoCaixaAlta = caixaAlta(objeto)
console.log(objetoCaixaAlta)

let objetoTextoCorrido = textoCorrido(objeto)
console.log(objetoTextoCorrido)

function caixaAlta(obj)
{
    let objClonado = structuredClone(obj)
    for (let item in objClonado){
        objClonado[item] = objClonado[item].toUpperCase()
    }
    return objClonado
}

function textoCorrido(obj)
{
    let texto = ""
    for (let item in obj){
        texto = texto + `${obj[item]}, `
    }        
    return texto.slice(0, texto.length -2)     
}