//Function Hoisting (junto com var é a prioridade do codigo)
function  falaOI () {
    console.log('oi')
}
falaOI()

//Function expression (colocar em uma variável)
const falaOi = function () { //a variável vira uma função
    console.log('oii')
}
falaOi()

//Arrow function
const arrow = () => {
    console.log('Sou uma arrow function ')
}

//Dentro de um objeto
const objeto = {
    falar: function () {
        console.log('Estou falando')
    }
}
objeto.falar()

//Parâmetro, arguments
function funcao() { //so funciona com o function
    console.log(arguments[1]) //argumentos que sustenta todos os argumentos enviados
} //mesmo com parâmetros, tem arguments
funcao(1, 2, 3, 4, 'jfndf') //esse parâmetros n são precisos, ent eles viram arguments(array)

//Fazer o parâmetro com valor definido caso não tenha
function funcao1(a, b = 2, c = 3) {
    return a + b + c
}
funcao1(2, undefined , 20) //como b ta no meio, tem q deixar undefined

//Atribuição via desestruturação
function funçao2 ({ nome, idade }) {
    console.log(nome, idade)
} 
funçao2({ nome: 'Hiago', idade: 16 })

function funçao3 ([ nome, idade ]) {
    console.log(nome, idade)
} 
funçao2([ 'Hiago', 16 ])

//