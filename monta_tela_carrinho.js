import { listSessionCarrinho, removeItem, alteraQuantidade } from "./itens_carrinho.js";

import{atualizaQuantidade} from "./animacao_produto_carrinho.js"
import { cadastroPedido } from "./js_api/pedido/pedido_cadastrar.js";

atualizaQuantidade()

const divItens = document.querySelector('#itens')

let totalCompra = 0.0

let cont = 0

listSessionCarrinho().map((elem, i) => {
    cont++
    const divItemProduto = document.createElement('div')
    divItemProduto.setAttribute('class', 'item_produto')

    const imgCard = document.createElement('img')
    imgCard.setAttribute('src', elem.caminhoImagem)
    imgCard.setAttribute('class', 'img_card')
    imgCard.setAttribute('alt', elem.descricao)
    imgCard.setAttribute('title', elem.descricao)

    const divItemCarrinho = document.createElement('div')
    divItemCarrinho.setAttribute('class', 'item_carrinho')

    const divDescricao = document.createElement('div')
    divDescricao.setAttribute('class', 'descricao')

    const h3Descricao = document.createElement('h3')
    h3Descricao.setAttribute('class', 'descricao_produto')
    h3Descricao.innerHTML = elem.descricao

    divDescricao.appendChild(h3Descricao)

    const divValores = document.createElement('div')
    divValores.setAttribute('class', 'valores')

    const h3ValorUnitario = document.createElement('h3')
    h3ValorUnitario.setAttribute('class', 'valor_unitario')

    h3ValorUnitario.innerHTML = `<span> R$ </span> <span>${elem.valorUnitario.toFixed(2).replace('.', ',')} ${elem.unidade}</span>`

    const divQuantidade = document.createElement('div')
    divQuantidade.setAttribute('class', 'quantidade')

    const inputQuantidade = document.createElement('input')
    inputQuantidade.setAttribute('type', 'number')
    inputQuantidade.setAttribute('name', 'quantidade')
    inputQuantidade.setAttribute('id', `quantidade${i}`)
    inputQuantidade.setAttribute('class', 'quantidade_item')
    inputQuantidade.setAttribute('value', elem.quantidade)

    inputQuantidade.addEventListener('blur', (evt) => {
        let quant = evt.target.value

        if (quant > 0) {
            alteraQuantidade(i, evt.target.value)
            window.location = 'carrinho.html'
        } else {
            alert('Não permitido valor abaixo de 100g representado por 0,100')
        }
    })

    divQuantidade.appendChild(inputQuantidade)

    let totalItem = parseFloat(elem.valorUnitario) * parseFloat(elem.quantidade)

    totalCompra += parseFloat(totalItem)

    document.querySelector('#valor_compra').innerHTML = totalCompra.toFixed(2).replace('.', ',')

    let valorTotalPagar = parseFloat(totalCompra) + parseFloat(5)

    document.querySelector('#valor_total_pagar').innerHTML = valorTotalPagar.toFixed(2).replace('.', ',')

    const h3ValorTotalItem = document.createElement('div')
    h3ValorTotalItem.setAttribute('class', 'valor_total_item')
    h3ValorTotalItem.innerHTML = `<span> R$ </span> <span> ${totalItem.toFixed(2).replace('.', ',')}</span>`

    divValores.appendChild(h3ValorUnitario)
    divValores.appendChild(divQuantidade)
    divValores.appendChild(h3ValorTotalItem)

    divItemCarrinho.appendChild(divDescricao)
    divItemCarrinho.append(divValores)

    const divImgRemover = document.createElement('div')
    divImgRemover.setAttribute('class', 'img_remover')

    const imgBtnRemover = document.createElement('img')
    imgBtnRemover.setAttribute('src', 'imagens/icones/remover.png')
    imgBtnRemover.setAttribute('alt', `Remover ${elem.descricao}`)
    imgBtnRemover.setAttribute('title', `Remover ${elem.descricao}`)

    imgBtnRemover.addEventListener('click', (evt) => {
        if (window.confirm(`Deseja remover ${elem.descricao} da sua lista de compra?`)) {
            removeItem(i)
            window.location = 'carrinho.html'
        }
    })

    divImgRemover.appendChild(imgBtnRemover)

    divItemProduto.appendChild(imgCard)
    divItemProduto.appendChild(divItemCarrinho)
    divItemProduto.appendChild(divImgRemover)


    divItens.appendChild(divItemProduto)
});

cont == 0 ? divItens.innerHTML = 'NENHUM ITEM NO CARRINHO!' : ''

const btnFinalizar = document.querySelector('#finalizar_compra')

btnFinalizar.addEventListener('click', (evt)=>{
    cadastroPedido()
})