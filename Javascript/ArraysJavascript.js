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