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