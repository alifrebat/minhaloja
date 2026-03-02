import { produtos } from "./dados_produtos.js";
//import { produtos } from "./js_api/produto/produtos_listar.js"


const listaProdutos = async () => {
    /*const lstProdutos = await produtos()
    
    return lstProdutos*/
    
    return produtos
}

const listarSecoes = async () => {
    const filtroMapSecao = new Map()

    //const lstProdutos = await produtos()
    const lstProdutos = produtos

    lstProdutos.forEach(elem => {
        
        //filtroMapSecao.set(elem.idSecao, elem)
        filtroMapSecao.set(elem.setor.secao.idSecao, elem)
        
    })

    const secoes = Array.from(filtroMapSecao.values())

    return secoes
}

const listarProdutosSecao = async (idSecao) => {
    /*const filtroProdutos = await produtos()

    return filtroProdutos.filter(elem => elem.idSecao == idSecao)*/

    return produtos.filter(elem => elem.setor.secao.idSecao == idSecao)
}

const listarProdutosDestaque = async () => {
    //const filtroProdutos = await produtos()

    //return filtroProdutos.filter(elem => elem.destaque == true)

    return produtos.filter(elem => elem.destaque == 's')
}

export { listaProdutos, listarSecoes, listarProdutosSecao, listarProdutosDestaque }
