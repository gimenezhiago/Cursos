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

//Filter (retornar um array com os valores que passarem na condição)
const numeros = [1, 2, 3, 4, 5, 6, 70, 80, 90]
const maiorQueDez = numeros.filter(valor => valor > 10) //vai pegar os valores maiores que 10

const p = [
    { nome: 'hiago', idade: 20 },
    { nome: 'luana', idade: 19 },
    { nome: 'marcia', idade: 40 },
]
const pnew = p.filter(valor => valor.nome.length >= 5) //vai pegar os nomes com mais de 5 letras

//endWith() (para verificar se termina com algo)
nome.endsWith('o') //vai verificar se termina com o

//Map (para transformar os valores)
const num = [16, 22, 3, 4, 50, 60, 7, 80, 9]
const numDobro = num.map(valor => valor * 2) //vai dobrar os valores

const ps = [
    { nome:'Hiago', idade: 20 },
    { nome:'Luana', idade: 19 },
    { nome:'Claudio', idade: 40 },
]
const psNome = ps.map(obj => obj.nome) //vai pegar só os nomes

//Reduce (para transformar os valores em um único valor)
const total = num.reduce((acumulador, valor) => acumulador + valor, 0) //vai somar todos os valores

const ps1 = [
    { nome:'Hiago', idade: 20 },
    { nome:'Luana', idade: 19 },
]
const maisVelha = ps1.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador
    return valor
}) //vai pegar a pessoa mais velha

//Filter, Map e Reduce
const numPar = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor) //vai pegar os valores pares, dobrar e somar