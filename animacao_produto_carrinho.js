import { quantidadeItem } from './itens_carrinho.js'

const carrinho = document.querySelector('.carrinho')

const cardItemAnimacao = (objItem) => {
  const divItemCardAnimacao = document.createElement('div')
  divItemCardAnimacao.setAttribute('class', 'itemCardAnimacao')
  divItemCardAnimacao.style.backgroundImage = `url(${objItem.querySelector('img').src})`

  const ItemObjDomRect = objItem.getBoundingClientRect()
  const carrinhoObjDomRect = carrinho.getBoundingClientRect()

  const posItemObjX = ItemObjDomRect.left
  const posItemObjY = ItemObjDomRect.top

  const posCarrinhoObjX = carrinhoObjDomRect.left
  const posCarrinhoObjY = carrinhoObjDomRect.top

  divItemCardAnimacao.style.left = `${posItemObjX}px`
  divItemCardAnimacao.style.top = `${posItemObjY}px`

  createDivAnimacao(divItemCardAnimacao)

  setTimeout(() => {
    divItemCardAnimacao.style.transform = `translate(${posCarrinhoObjX - posItemObjX}px, ${posCarrinhoObjY - posItemObjY}px) `;
    divItemCardAnimacao.style.opacity = 0;
  }, 0);

  setTimeout(() => {
    divItemCardAnimacao.remove();
    document.querySelector('.divAnimacao').remove()

    atualizaQuantidade()

  }, 1200);

}

const createDivAnimacao = (objAnime) => {
  const body = document.querySelector('body')

  const divAnimacao = document.createElement('div')
  divAnimacao.setAttribute('class', 'divAnimacao')

  divAnimacao.appendChild(objAnime)

  body.appendChild(divAnimacao)

}

const atualizaQuantidade = () => {
  const quantidadeItens = document.querySelector('#quantidade_item');
  quantidadeItens.textContent = quantidadeItem()
  return quantidadeItem()
}


atualizaQuantidade()



export { cardItemAnimacao, atualizaQuantidade }