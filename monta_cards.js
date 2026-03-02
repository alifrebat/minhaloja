import { addItem } from './itens_carrinho.js'
import { cardItemAnimacao } from './animacao_produto_carrinho.js'

const limpaLista = (obj) => {
    if (obj.childElementCount > 0) {
        const filhosDivLista = [...document.querySelectorAll(".card")]

        for (let i in filhosDivLista) {
            filhosDivLista[i].remove()
        }
    }
}

const montaCards = async (produtos) => {
    let divCards = document.querySelector("#cards")
    limpaLista(divCards)

    const lstProdutos = await produtos    

    lstProdutos.sort((a, b) => {
        if (a.descricao > b.descricao)
            return 1
        if (a.descricao < b.descricao)
            return -1
        return 0
    })

    lstProdutos.forEach((elem, i) => {
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', elem.caminhoImagem)
        imgCard.setAttribute('class', 'img_card')
        imgCard.setAttribute('alt', elem.descricao)
        imgCard.setAttribute('title', elem.descricao)

        const divCardConteudo = document.createElement('div')
        divCardConteudo.setAttribute('class', 'conteudo_card')

        const descricaoH3 = document.createElement('h3')
        descricaoH3.innerHTML = elem.descricao

        const descreDetalhadaH3 = document.createElement('p')
        descreDetalhadaH3.innerHTML = elem.descricaoDetalhada

        const divValor = document.createElement('div')
        divValor.setAttribute('class', 'valor')

        const spanSimbolo = document.createElement('span')
        spanSimbolo.innerHTML = 'R$'

        const spanValorUnitario = document.createElement('span')
        //spanValorUnitario.innerHTML = `${parelem.valorUnitario.toFixed(2).replace(".", ",")} ${elem.unidade}`
        spanValorUnitario.innerHTML = `${parseFloat(elem.valorUnitario).toFixed(2).replace(".", ",")} ${elem.unidade}`

        const btnAdicionar = document.createElement('button')
        btnAdicionar.setAttribute('class', 'add')
        btnAdicionar.innerHTML = 'Adicionar'
        btnAdicionar.addEventListener('click', (evt) => {
            addItem(elem)
            //window.location = 'carrinho.html'
            const objDivCard = evt.target.parentNode.parentNode

            cardItemAnimacao(objDivCard)

        })

        divValor.appendChild(spanSimbolo)
        divValor.appendChild(spanValorUnitario)

        divCardConteudo.appendChild(descricaoH3)
        divCardConteudo.appendChild(descreDetalhadaH3)
        divCardConteudo.appendChild(divValor)
        divCardConteudo.appendChild(btnAdicionar)

        divCard.appendChild(imgCard)
        divCard.appendChild(divCardConteudo)

        divCards.appendChild(divCard)

    })
}

export { montaCards }