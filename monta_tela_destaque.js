import { listarProdutosDestaque } from '/js/carrega_produtos.js'
import { montaCards } from '/js/monta_cards.js'

const montaDestaque = async () => {
    const produtos = await listarProdutosDestaque()
    
    montaCards(produtos)
}

montaDestaque()