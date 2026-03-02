import { listaProdutos, listarSecoes, listarProdutosSecao } from './carrega_produtos.js'
import { montaCards } from './monta_cards.js'

const carregaItens = async (idSecao) => {
    let produtos = []

    if (idSecao == 0) {
        produtos = await listaProdutos()
    } else {
        produtos = listarProdutosSecao(idSecao)
    }

    montaCards(produtos)
}

const montaLinksSecao = async () => {
    const ulMenu = document.querySelector("#itemMenu")

    const liMenuTudo = document.createElement('li')
    liMenuTudo.setAttribute('class', 'item tudo')
    liMenuTudo.innerHTML = 'Todos os Produtos'
    liMenuTudo.addEventListener('click', (evt) => {
        carregaItens(0)
    })

    ulMenu.appendChild(liMenuTudo)

    const secoes = await listarSecoes()
    
    secoes.forEach(elem => {
        const liMenu = document.createElement('li')
        liMenu.setAttribute('class', 'item')

        const aMenu = document.createElement('a')
        aMenu.setAttribute('class', 'menu')
        //aMenu.innerHTML = elem.nomeSecao
        aMenu.innerHTML = elem.setor.secao.nomeSecao

        aMenu.addEventListener('click', (evt) => {
            //carregaItens(elem.idSecao)
            carregaItens(elem.setor.secao.idSecao)
        })

        liMenu.appendChild(aMenu)

        ulMenu.appendChild(liMenu)
    })

    carregaItens(0)
}

montaLinksSecao()

export { carregaItens, montaCards }
