let itens = JSON.parse(sessionStorage.getItem("carrinho")) || []

let contItens = 0

const itemCarrinho = (objItem) => {
    let item = {
        idProduto: objItem.idProduto,
        descricao: objItem.descricao,
        valorUnitario: objItem.valorUnitario,
        unidade: objItem.unidade,
        caminhoImagem: objItem.caminhoImagem,
        quantidade: 1
    }

    return item
}

const verificaItem = (objItem) => {
    let pos = itens.findIndex(elem => elem.idProduto === objItem.idProduto)

    return pos
}

const addItem = (objItem) => {
    let itemSelCarrinho = itemCarrinho(objItem)

    let pos = verificaItem(itemSelCarrinho)

    if (pos == -1) {
        itens.push(itemSelCarrinho)
    } else {
        itens[pos].quantidade += 1
    }

    addSessionCarrinho(itens)
}

const addSessionCarrinho = (carrinho) => {
    contItens++

    sessionStorage.setItem("carrinho", JSON.stringify(carrinho))

    quantSessionItem(contItens)

    listItens()
}

const listSessionCarrinho = () => {
    return JSON.parse(sessionStorage.getItem("carrinho")) || []
}

const quantSessionItem = (quant) => {
    quantidadeItem(quant)
    return sessionStorage.setItem("quantItem", JSON.stringify(quant))
}

const listItens = () => {
    return listSessionCarrinho()
}

const removeItem = (indexItem) => {
    itens.splice(indexItem, 1)
    addSessionCarrinho(itens)

    listSessionCarrinho()
}

const alteraQuantidade = (indexItem, quantidade) => {
    itens[indexItem].quantidade = parseFloat(quantidade)
    addSessionCarrinho(itens)

    listSessionCarrinho()
}

const quantidadeItem = () => {
    let quantItem = 0

    listSessionCarrinho().forEach(elem => {
        quantItem += elem.quantidade
    });

    return Math.ceil(quantItem)
}

export { addItem, listSessionCarrinho, removeItem, alteraQuantidade, quantidadeItem }
