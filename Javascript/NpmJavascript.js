//Module.exports (para exportar o módulo pelo Node.js)
module.exports.nome = nome
module.exports = { nome, sobrenome, Pessoa} //sobrepõe o módulo com um objeto

//exports e this (para exportar o módulo pelo Node.js)
exports.idade = idade
this.cidade = cidade // this (para exportar o módulo pelo Node.js)

//require (para importar o módulo pelo Node.js)
const nome = require('./nome.js')
const falaNome = nome.falaNome

const idade = require('./idade.js').falaNome

//require desestruturado (para importar o módulo pelo Node.js)
const { cidade, nome, sobrenome } = require('./cidade.js')

//Exportar uma função (para exportar o módulo pelo Node.js)
module.exports = function(x, y) {
    return x * y
}
const multiplicacao = require('./multiplicacao.js')
multiplicacao(2, 3)

//Exportar uma classe (para exportar o módulo pelo Node.js)
module.exports = class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    }
}
const Pessoa = require('./pessoa.js')
const p1 = new Pessoa('Luiz', 'Otávio')

//Navegar nas pastas
const falaNome = require('./pasta1/pasta2/nome.js')
const falafNome = require('../pasta2/nome.js') //volta uma pasta
const falaNrome = require('../../pasta2/nome.js') //volta duas pastas

//__filename e __dirname (para obter o caminho do arquivo e diretório atual no Node.js)
console.log(__filename) //caminho completo do arquivo Exemplo: /home/usuario/projeto/arquivo.js
console.log(__dirname) //caminho completo do diretório Exemplo: /home/usuario/projeto

//path
const path = require('path') //módulo nativo do Node.js para manipulação de caminhos
const caminhoArquivo = path.resolve(__dirname, 'pasta1', 'arquivo.js') //caminho absoluto Exemplo: /home/usuario/projeto/pasta1/arquivo.js
const cami = path.resolve(__dirname, '..', 'arquivo.js') //caminho absoluto voltando uma pasta Exemplo: /home/usuario/arquivo.js




