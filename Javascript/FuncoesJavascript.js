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