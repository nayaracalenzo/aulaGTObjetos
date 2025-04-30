const alunos = ['Léo', 'Douglas', 'Ana']

const pessoa = {
    nome: 'Julio',
    idade: 28,
    genero: 'Masculino'
}

const produtos = [
    {
        id: 1,
        img: 'linkdaimagem',
        descricao: 'descricaoprod',
        nomeProd: 'nomedoproduto',
        categoria: 'categoriadoprod',
        preco: 'valordoprod',
        desconto: 'true'
    },
    {
        id: 2,
        img: 'linkdaimagem',
        descricao: 'descricaoprod',
        nomeProd: 'nomedoproduto',
        categoria: 'categoriadoprod',
        preco: 'valordoprod',
        desconto: 'true'
    }, 
    {
        id: 3,
        img: 'linkdaimagem',
        descricao: 'descricaoprod',
        nomeProd: 'nomedoproduto',
        categoria: 'categoriadoprod',
        preco: 'valordoprod',
        desconto: 'true'
    }, 
    {
        id: 4,
        img: 'linkdaimagem',
        descricao: 'descricaoprod',
        nomeProd: 'nomedoproduto',
        categoria: 'categoriadoprod',
        preco: 'valordoprod',
        desconto: 'true'
    }
]

console.log(produtos[0].id)
console.log(produtos[1].nomeProd)
console.log(produtos[2].id)
console.log(produtos[3].id)

produtos[1].descricao = 'aqui tem uma nova descrição'

delete produtos[2].preco



