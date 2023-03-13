// // ATENÇÃO!!!
// //    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
// //    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// // EXERCÍCIO 01
// function retornaTamanhoArray(array) {
   
// }

// // EXERCÍCIO 02
// function retornaArrayInvertido(array) {
  
// }

// // EXERCÍCIO 03
// function retornaArrayOrdenado(array) {
  
// }

// // EXERCÍCIO 04
// function retornaNumerosPares(array) {
  
// }

// // EXERCÍCIO 05
// function retornaNumerosParesElevadosADois(array) {
 
// }

// // EXERCÍCIO 06
// function retornaMaiorNumero(array) {
  
// }

// // EXERCÍCIO 07
// function retornaObjetoEntreDoisNumeros(num1, num2) {

// }

// // EXERCÍCIO 08
// function retornaNPrimeirosPares(n) {
   
// }

// // EXERCÍCIO 09
// function classificaTriangulo(ladoA, ladoB, ladoC) {

// }


// let arrayNumeros = [3, 2, 1, 4, 7, 6, 5]
// retornaSegundoMaiorESegundoMenor(arrayNumeros)
// // EXERCÍCIO 10
// function retornaSegundoMaiorESegundoMenor(array) {
//     let novoArray = []
//     array = array.sort()
//     novoArray.push(array.slice(array.length -2, array.length -1))
//     novoArray.push(array.slice(1, 2))
//     console.log(novoArray.toString())
// }


// let filme = {
//     nome: 'O Diabo Veste Prada',
//     ano: 2006,
//     diretor: 'David Frankel',
//     atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
//  }
// retornaChamadaDeFilme(filme)
// // EXERCÍCIO 11
// function retornaChamadaDeFilme(filme) {
//    console.log(`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`)
// }



// let pessoa = {
// 	nome: "Astrodev",
// 	idade: 25,
// 	email: "astrodev@labenu.com.br",
// 	endereco: "Rua do Futuro, 4"
// }

// obj = retornaPessoaAnonimizada(pessoa)
// console.log(obj)
// // EXERCÍCIO 12
// function retornaPessoaAnonimizada(pessoa) {
//     let novoObj = structuredClone(pessoa)
//     novoObj.nome = "ANÔNIMO"
//     return novoObj
// }



// let clientes = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]
// retornaPessoasAutorizadas(clientes)
// // EXERCÍCIO 13A
// function retornaPessoasAutorizadas(pessoas) {
//     let novoObj = pessoas.filter(pessoa => pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60);
//     console.log(JSON.stringify(novoObj))
// }

// // EXERCÍCIO 13B
// retornaPessoasNaoAutorizadas(clientes)
// function retornaPessoasNaoAutorizadas(pessoas) {
//     let novoObj = pessoas.filter(pessoa => pessoa.altura < 1.5 || (pessoa.idade <= 14 || pessoa.idade >= 60));  
//     console.log(JSON.stringify(novoObj))
// }

let clientesBanco = 
[
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

retornaContasComSaldoAtualizado(clientesBanco)
// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (const key in contas) {
        if (contas[key].compras.length !== 0)
        {
            contas[key].saldoTotal -= contas[key].compras.reduce((anterior, corrente) => anterior + corrente)
            contas[key].compras = []
        }
    }
    console.log(JSON.stringify(contas))
}



// let consultas = 
// [
//     { nome: "João", dataDaConsulta: "01/10/2021" },
//     { nome: "Pedro", dataDaConsulta: "02/07/2021" },
//     { nome: "Paula", dataDaConsulta: "03/11/2021" },
//     { nome: "Márcia", dataDaConsulta: "04/05/2021" }
// ]



// function compareNomes( a, b ) {
//     if ( a.nome < b.nome ){
//         return -1;
//     }
//     if ( a.nome > b.nome ){
//         return 1;
//     }
//     return 0;
// }
// retornaArrayOrdenadoAlfabeticamente(consultas)
// // EXERCÍCIO 15A
// function retornaArrayOrdenadoAlfabeticamente(consultas) {
//     consultas.sort(compareNomes);
//     console.log(JSON.stringify(consultas))
// }


// retornaArrayOrdenadoAlfabeticamente(consultas)
// // EXERCÍCIO 15B
// function retornaArrayOrdenadoPorData(consultas) {
   
// }