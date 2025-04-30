// //Crie um objeto chamado livro com as propriedades: titulo, autor, ano. Acesse e imprima o autor do livro. Modifique o ano do livro para 2023. Adicione uma nova propriedade editora.

// const livro = {
//     titulo: 'O livro da minha vida',
//     autor: 'Nayara',
//     ano: 2025
// }


// alert(`${livro.autor}`)  //"Nayara"


// livro.ano = 2023
// console.log(livro.ano) //2023

// livro.editora = 'Minerva'

// console.log(livro)


// //Dado o array abaixo, crie um laço que percorre os objetos e imprime o nome de cada aluno:

// const alunos = [
//     { nome: "João", nota: 8 },
//     { nome: "Maria", nota: 9 },
//     { nome: "Pedro", nota: 7 }
// ];


// for (i = 0; i < alunos.length; i++) {
//     console.log(`o aluno ${alunos[i].nome} possui nota ${alunos[i].nota}`)
// }

//Crie uma função que recebe um array de objetos de produtos e retorna a soma total dos preços:
// const produtos = [
//     { nome: "Camiseta", preco: 30 },
//     { nome: "Calça", preco: 80 },
//     { nome: "Boné", preco: 20 }
// ];

// function totalPreco (array) {
//     let soma = 0
//     for (let i = 0; i < array.length; i++) {
//         soma += array[i].preco
//     }
    
//     return soma
// }

// console.log(totalPreco(produtos))  //130

//Crie uma função que recebe um array de produtos e o nome de um produto vendido. A função deve reduzir o estoque desse produto em 1.

// const produtos = [
//     { nome: "Camiseta", estoque: 10 },
//     { nome: "Calça", estoque: 5 },
//     { nome: "Boné", estoque: 7 }
// ];

// function reduzirEstoque (array, itemVendido) {
//     for (let i = 0; i < array.length; i++) {
//         if (itemVendido === array[i].nome && array[i].estoque > 0) {
//             console.log(`${array[i].nome} possuí ${array[i].estoque} items`)
//             for(let e = array[i].estoque; e > 1; e--){
//                 array[i].estoque--
//                 console.log(`você fez uma venda, seu estoque de ${array[i].nome} possui ${array[i].estoque} itens`)
//             }
//         }
//     }
// }

// reduzirEstoque(produtos, 'Camiseta')


/**Crie uma função que recebe um array de alunos com nome e nota e retorna um novo array apenas com os alunos que tiveram nota maior ou igual a 7. (utilize o filter( )) */

const alunos = [
    { nome: "João", nota: 8 },
    { nome: "Léo", nota: 5 },
    { nome: "Pedro", nota: 7 }
    ];

    let aprovados = alunos.filter((aluno) => aluno.nota >= 7);

    console.log(aprovados);