const elemento = [
    {tag:'p', texto: 'Frase 1'},
    {tag:'div', texto: 'Frase 2'},
    {tag:'section', texto: 'Frase 3'},
    {tag:'footer', texto: 'Frase 4'}
]

const container = document.querySelector('.container')
const divTotal = document.createElement('div')
container.appendChild(divTotal)

for (let i = 0; i < elemento.length; i++) {
    const { tag, texto} = elemento[i]
    const tagCriada = document.createElement(tag)
    tagCriada.innerHTML = texto
    divTotal.appendChild(tagCriada)
}