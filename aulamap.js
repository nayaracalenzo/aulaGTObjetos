const tabelaItens = document.getElementById('tabela-produtos')


const produtos = [
    {
        img: "https://http2.mlstatic.com/D_NQ_NP_783353-MLB31054611930_062019-F.jpg",
        nome: "Camiseta",
        desc: "Camiseta cinza",
        preco: 49.90,
        frete: true

    }, 
    {
        img: "https://th.bing.com/th/id/R.fa8f4ea3fd75805f6f2d16467754a397?rik=QVZbgmYsl7VTkQ&pid=ImgRaw&r=0",
        nome: "Tênis",
        desc: "Tênis All Star",
        preco: 199.90,
        frete: false

    }, 
    {
        img: "https://th.bing.com/th/id/OIP.qMbUjb3TrRZoIWc52R-KCQAAAA?rs=1&pid=ImgDetMain",
        nome: "Calça Jeans",
        desc: "Calça jeans boca de sino",
        preco: 120.00,
        frete: true

    },
    {
        img: "https://th.bing.com/th/id/OIP.qMbUjb3TrRZoIWc52R-KCQAAAA?rs=1&pid=ImgDetMain",
        nome: "Calça Jeans",
        desc: "Calça jeans boca de sino",
        preco: 120.00,
        frete: true

    },
    {
        img: "https://th.bing.com/th/id/R.fa8f4ea3fd75805f6f2d16467754a397?rik=QVZbgmYsl7VTkQ&pid=ImgRaw&r=0",
        nome: "Tênis",
        desc: "Tênis All Star",
        preco: 199.90,
        frete: false

    },
    {
        img: "https://th.bing.com/th/id/R.fa8f4ea3fd75805f6f2d16467754a397?rik=QVZbgmYsl7VTkQ&pid=ImgRaw&r=0",
        nome: "Tênis",
        desc: "Tênis All Star",
        preco: 199.90,
        frete: false

    }
]

tabelaItens.innerHTML = produtos.map((produto)=>{
    return `
        <tr class="border-t border-gray-200 hover:bg-gray-200">
            <td><img class="w-20 p-2" src=${produto.img} alt=${produto.desc}></td>
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco}</td>
            ${produto.frete ? '<td class="text-green-600 font-medium">Sim</td>' : '<td class="text-red-600 font-medium">Não</td>' }
            
        </tr>
    `
    
}).join("")