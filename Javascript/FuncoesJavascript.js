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

//IIFE - Immediately Invoked Function Expression
(function() { //é uma função imediata
    const name = 'Hiago' //ela n se junta com escopo global
    console.log(name)
})()

//IIFE com parâmetros
(function(idade, peso) { 
    const name = 'Hiago' 
    console.log(name + idade + peso)
})(17, 73) //os valores dos parâmetros ficam aq

//Factory Function
function pessoa(nome, sobrenome, peso, altura) { //essas são como atribuição via desestruturação
    return { 
        nome, 
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}` //this sempre refere ao objeto
        }, //this - esse, ou seja, se refere a essa pessoa
        peso,
        altura,
        imc() {
            const i = this.peso / (this.altura ** 2)
            return i.toFixed(2)
        } 
     }
}
const p1 = pessoa('hiago', 'gimenez', 75, 1,77) //a pessoa nesse caso é p1
console.log(p1.fala('sobre factory'))
console.log(p1.imc())

//Passar uma função do objeto para um atributo (Getter)
function pessoa(peso, altura) {
    return { 
        peso,
        altura,
        get imc() { //não pode ter parâmetro
            const ii = this.peso / (this.altura ** 2)
            return ii.toFixed(2)
        }
    }
}
const p2 = pessoa('hiago', 'gimenez', 75, 1,77)
console.log(p2.imc) //não precisa executar a função

//Para setar o valor do atributo (Setter)
function pessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor) { //tem q ter parâmetro
            valor = valor.split(' ') //separa por espaço
            this.nome = valor.shift() //pega o primeiro nome
            this.sobrenome = valor.join('') //pega oq tem depois no caso ' '
        }
    }
}
const p3 = pessoa('hiago', 'vieira')
p3.nomeCompleto = 'Hiago Gimenez' //aq passa um novo valor
console.log(p3.nomeCompleto)

//bind
function clickbtn() { //se for arrow function n precisa bind
    document.addEventListener('click', function(event) {
        const elemento = event.target
        if (elemento.classList.contains('btn-num')) {
            this.btnParaDisplay(elemento.innerText)
        }
    }.bind(this)) //esse bind fala pro this ser o pai do pai
} //ou seja ele n vai ser o document mas sim o pai do document

//Função eval (Ele executa tudo como fosse javascript, tudo que mandar)
conta = eval(conta) //ele realiza a conta q for, ou comando

//Constructor Function (devolve um objeto como o a fábrica)
function Pessoa(nome, sobrenome) { //tem q começar com letra maiuscula a Pessoa
    this.nome = nome
    this.sobrenome = sobrenome
    this.metodo = () => {
        console.log('oi' + this.nome)
    }
}
const pessoa1 = new Pessoa('Hiago', 'Gimenez') //quando usa a função construtora tem q usar new
pessoa1.metodo()

//Funções recursivas
function recursiva(max) { //é como um for
    if (mex > 10) return
    max++
    console.log(max)
    recursiva(max) //ela se chama no final dela
}
recursiva(-10)

//Funções geradoras
function* geradora1() {
    //codigo
    yield 'valor 1'//é como um return a cada vez q chama a função utiliza o proximo yield
    //codigo
    yield 'valor 2' //mas n é um return pq o return termina a função
    //codigo
    yield 'valor 3' 
}
const g1 = geradora1()
console.log(g1.next().value) //pula o yield

function* geradora2() {
    yield function() {
        console.log('oi 1')
    }
    yield function() {
        console.log('oi 2')
    }
}
const g2 = geradora2()
const funct = g2.next().value