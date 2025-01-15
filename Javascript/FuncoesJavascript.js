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

//Return (Retorna um valor e termiana a função)
function soma(a, b) {
    return a + b
}
console.log(soma(1, 2)) //o console.log apenas exibe oq mandar

//Função retona outra função
function criaMulti(multi) {
    return (n) => {
        return n * multi
    }
}
const duplica = criaMulti(2)
console.log(duplica(2))

//Escopo léxico
const nome = 'Hiago' //está no escopo global
function falaNome() { //a preferência é o seu escopo para encontrar algo
    console.log(nome) //escopo léxico, como n tem no seu escopo, ela vai procurando no escopo pai assim sucessivamente
}
falaNome()

//Closures
function retornaFuncao() {
    const nome = 'Hiago'
    return function() {
        return nome //o closure é oq da acesso ao escopo léxico externo
    }
}
const fun = retornaFuncao()
console.log(fun) //como n foi executada, faz igual o dir

//Console.dir
console.dir(fun) //exibe uma lista enterativa das propriedades

//Funções de callback (coisa que chama depois que termina algo)
function f1(callback) {
    setTimeout(() => { //simula algo que demora na web
        console.log('f1')
        if (callback) callback()
    }, rand()) //aq sorteia o tempo q será executado
}
function f2(callback) {
    setTimeout(() => {
        console.log('f2')
        if (callback) callback()
    }, rand())
}
f1(() => { //esse é o callback porque independente do tempo ele será executado nessa ordem
    f2(() => {
        console.log('Fim') //esse callback é chamado de inferno
    })
})

//Função callback sem arvore de natal
f1(f1callback)
function f1callback() {
    f2(f2callback)
}
function f2callback() {
    console.log('Fim')
}
