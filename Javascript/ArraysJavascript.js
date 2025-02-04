//Array (literal)
const nomes = ['hiago', 'luana']

//Array (construtor)
const names = new Array('hiago', 'luana') //funciona com string, objeto, funções e numeros

//Para pegar o valor com indice
const nome = nomes[0] //pegou o hiago

//Para deletar no array
delete nomes[1]

//Para deletar o ultimo índice
nomes.pop()

//Para deletar o primeiro índice
nomes.shift()

//Para adicionar no final
nomes.push()

//Para adicionar no começo
nomes.unshift()

//rest (sem ser por referência)
const novo = [...nomes] //gerou uma cópia

//lenght no array
console.log(nomes.length)

//slice (fatiar o array)
const newe = nomes.slice(1, 3) //vai pegar os 3 primeiros nesse caso

//split (para separar valores)
let eu = 'Hiago Gimenez Vieira'
const newee = eu.split(' ') //separando por espaço

//join (para juntar valores)
const newwe = eu.join(' ') //juntando por espaço

//Maior número
const maior = Number.MAX_VALUE

//splice(indice, delete, elem1, elem2, elem3) 
const removidos = nomes.splice(4, 1) //deleta o valor do indice 4
const adicionados = nomes.splice(3, 0, 'marcia') //adiciona o valor no indice 3
const pop = nomes.splice(nomes.length, 1)
const shift = nomes.splice(0, 1)
const push = nomes.splice(nomes.length, 0, 'hiago')
const unshift = nomes.splice(0, 0, 'claudio')

//Concatenando array
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
console.log(a1.concat(a2)) //vai juntar os dois arrays e pode mandar mais arrays

//spread
const a3 = [...a1, 'hiago', ...a2, ...[1, 2, 3]] //juntou os dois arrays

