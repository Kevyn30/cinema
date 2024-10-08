// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// const dobro = numeros.map((numero) => {
//     return numero * 3
// })
// console.log(dobro)

//{lista de produtos}
const produtos = [
    { id: 1, nome: `caneca`, preco: 9.9, temDesconto: false, quantidade: 1, },
    { id: 2, nome: `prato`, preco: 9, temDesconto: true, quantidade: 3, },
    { id: 3, nome: `mochila`, preco: 80.97, temDesconto: false, quantidade: 1, },
    { id: 4, nome: `tv`, preco: 100, temDesconto: true, quantidade: 2, },
    { id: 5, nome: `pitaya`, preco: 10.5, temDesconto: false, quantidade: 5, }
];
const produtosNovos = produtos.map(produto => {

    const novopreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco;

    return {
        id: produto.id,
        nome: produto.nome,
        preco: novopreco.toLocaleString(`pt-br`, {
            style: `currency`, currency: `BRL`
        }),
        quantidade: produto.quantidade
    }
})
console.log(produtosNovos)
// Faturamento com a venda todal do estoque
const faturamento = produtos.reduce((acumulador, produto) => {
    return acumulador + (produto.preco * produto.quantidade)
}, 0)
console.log(
    faturamento.toLocaleString(`pt-br`, {
        style: `currency`,
        currency: `BRL`,
    }),)
//filtro dos queestão em promoção.
const filtro = produtos.filter(produtos => produtos.temDesconto)
console.log(filtro)

//adicionando mais 10 emcada produto, filtrando os produtos em desconto e exibindo o valor total do faturamento na vendo de todo o estoque.

const faturamentoTotal = produtos.map(produto => {
    return { ...produto, quantidade: produto.quantidade + 10 }
})
.filter(produto => produto.temDesconto)
.reduce((acumulador, produto) => acumulador + produto.quantidade * produto.preco, 0,)
console.log(
    faturamentoTotal.toLocaleString(`pt-br`,{
        style:`currency`, currency:`BRL`
    }))