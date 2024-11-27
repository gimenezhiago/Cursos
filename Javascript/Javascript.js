// Para printar no console
console.log("Hello Word!!!")
console.log(123456, 35.85)
console.log('Meu nome é "Hiago". Estou aprendendo JavaScript às', 10, 'da manhã')

// Comentários
//
/* */ 

// Juntar Html e Js
/*<script></script>*/
/*<script src="index.js"></script>*/

// Para alertar
window.alert("Olá Mundo")
alert("Olá Mundo!!!")

// Para confirmar
window.confirm("Deseja realmente apagar?")
confirm("Deseja realmente apagar?")

// Para digitar
window.prompt("Digite seu cpf:")
prompt("Digite seu cpf:")

// Para declarar variável
let nome = "Hiago"
var sobrenome = "Gimenez"
const idade = 16

// Para colocar a variável
console.log("Meu nome é ", nome)

//Descobrir a tipagem
typeof nome

//Contenação
console.log(nome + sobrenome)
console.log(umaString.concat("em "," um lindo dia"))

//Template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos`);

//Dados Primitivos (imutáveis) - Valores copiados
// String: "Hiago"
// Number: 10 10.52
// Undefined: Não tem na memória
// Null: Nulo
// Boolean: True or False
// Infinity: Infinito

//Operadores Aritméticos
// + = mais
console.log(num1 + num2)
// - = menos
console.log(num1 - num2)
// * = multiplicação
console.log(num1 * num2)
// / = divisão
console.log(num1 / num2)
// ** = potenciação
console.log(num1**2)
// % = resto da divisão inteiro
console.log(num1 % num2)

//Precedencia dos operadores
/* 
    ()
    **
    * / %
    + -
 */

//Incremento e Decremento
num++ //Soma 1
++num //Soma primeiro
num-- //Diminui 1
--num //Diminui primeiro

//Operadores de atribuição
num += 2 //num = num + 2
num *= 2 //num = num * 2
num **=10 // num = num**10

//NaN = Not a Number

//Converte para number
parseInt(variavel) //Somente para inteiros
parseFloat(variavel) //Para números reais
Number(variavel) //Para números reais

//Para mudar o valor das variáveis(sem conflito)
[varA, varB, varC] = [varB, varC, varA]

//Para escapar o caracter 
let umaString = "Um \"texto\"" // a barra invertida é usada como escape

//Pegar um índice da string
umaString[3]
umaString.charAt(8)

//Para saber o índice da string
umaString.indexOf('texto')
umaString.indexOf('o', 4) //depois do índice colocado

//Para saber o índice de trás para frente
umaString.lastIndexOf('m')

//Expressão regular
umaString.match(/[a-z]/g) //somente as letras minúsculas

//Pesquisa o índice
umaString.search(/x/g) //o g significa pegar todos 

//Troca as palavras
umaString.replace('Um', 'Outra')

//Contar a quantidade de caracteres
umaString.length

//Para fatiar a string
umaString.slice(2, 6)
umaString.slice(-3) //negativo menos length
umaString.substring(umaString.length - 5)

//Para dividir uma string
umaString.split(' ')
umaString.split(' ', 2) //acontece o numero de vezes 

//Para maiusculo
umaString.toUpperCase()

//Para minisculo
umaString.toLowerCase()

//Para escrever na tela
window.document.write('Alguma coisa')

//Para escrever no html
window.document.body.innerHTML = 'Qualquer outra coisa <br/>'
document.body.innerHTML += 'Escrever'

//Converter para string
num1.toString()
num1.toString(2) //Binário

//Para colocar as casas decimais
num1.toFixed(2)

//Para ver se é inteiro
Number.isInteger(num1)

//Se é Não é um número
Number.isNaN(temp)

//Objeto Math
Math.floor(num1) //Arredonda o valor para baixo
Math.ceil(num1) //Arredonda o valor para cima
Math.round(num1) //Arredonda para o mais perto
Math.max(1, 2, 5, 3, 0) //Pega o maior
Math.min(1, 2, 5, 3, 0) //Pega o menor
Math.random() * (10 - 5) + 5 //Gera um número aleatorio entre 5 e 10
Math.PI //Pi
Math.pow(2, 10) // 2 ** 10

//Verificar boleano
!!(4/2)

//Para pegar um elemento
document.getElementById('numero')

//Array
const alunos = ['Luiz', 'Hiago', 'Luana', 18, 21, true]

//Pegar ou modificar valor de array por índice
console.log(alunos[0]) //Pega
alunos[1] = 'Gimenez' //Modifica
alunos[alunos.length] = 'Brizola' //Atualiza

//Para atualizar
alunos.push('Vieira') //No final
alunos.unshift('Vieira') //No começo

//Para remover
alunos.pop() //Remove o final
alunos.shift() //Remove o começo

//Remove por índice
delete alunos[1] //Fica branco dps de apagar

//Perguntar se array é uma instância 
console.log(alunos instanceof Array) //Boleano

//Function
function saudacao() {
    console.log("Bom dia!!!")
}

//Chamar função
saudacao()

//Função com parâmetro
function saudacao(nome) {
    console.log(`Bom dia ${nome}`)
}
saudacao('Hiago')

//Função que retorna
function saudacao(nome) {
    return `Bom dia ${nome}`
}
console.log(saudacao('Hiago'))

//Função com valor pronto caso n receba valor
function soma(x = 1, y = 1) {
    const resultado = x + y
    return resultado
}
console.log(soma())

//Função Anônima
const raiz = function (n) {
    return n ** 0.5
}
console.log(raiz(9))

//Arrow Function
const raiz2 = (n) => { 
    return n ** 0.5
}
console.log(raiz(9))

//Objeto
const pessoa1 = {
    nome: 'Hiago',
    sobrenome: 'Gimenez',
    idade: 16
}

//Acessar os atributos
console.log(pessoa1.nome)

//Função que cria objetos
function criaObjetos(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
function criaObjetos(nome, sobrenome, idade) {
    return { nome, sobrenome, idade}
}

//Objeto com função
const pessoa2 = {
    nome: 'Hiago',
    saudacao() {
        console.log(`Olá ${this.nome}`)
    }
}

//Dados de Referência (mutável) - Passado por referência
// Array: []
// Object: {}
// Function: function () 

//Fazendo uma cópia, não por referência (Transformando em primitivo)
let a = [1, 2, 3]
let b = [...a]

//Para pegar variável de forma global
const form = document.querySelector(".form")

//Para pegar uma ação(evento) após algo
form.onsubmit = function (evento) { //Pega a ação no caso é submitar
    evento.preventDefault() //Ignora os comando do navegador (como atualizar)
}

//Pegar uma ação com addEventListener
form.addEventListener('submit', recebeEventoForm())