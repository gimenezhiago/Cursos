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

//npm
//npm init -y (inicializa um novo projeto Node.js com um package.json padrão)
//npm install nome-do-pacote (instala um pacote e adiciona ao package.json)
//npm install nome-do-pacote@0.0.0 (instala uma versão específica de um pacote)
//npm install nome-do-pacote -E (instala um pacote e fixa a versão exata no package.json)
//npm install nome-do-pacote --save-dev (instala um pacote como dependência de desenvolvimento)
//npm install nome-do-pacote --save-prod (instala um pacote como dependência de produção)
//npm update (atualiza todos os pacotes para a versão mais recente, respeitando as restrições do package.json)
//npm uninstall nome-do-pacote (remove um pacote e atualiza o package.json)
//npm list (lista todos os pacotes instalados no projeto)
//npm list --depth=0 (lista apenas os pacotes de nível superior instalados no projeto)
//npm outdated (verifica se há pacotes desatualizados no projeto)

//package.json
{
    "name": "meu-projeto", //nome do projeto
    "version": "1.0.0", //versão do projeto
    "description": "Descrição do meu projeto", //descrição do projeto
    "main": "index.js", //arquivo principal
    "scripts": { //scripts para automatizar tarefas
        "start": "node index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Seu Nome", //autor do projeto
    "license": "ISC", //licença do projeto
    "dependencies": { //dependências do projet{
    }
    "devDependencies": { //dependências de desenvolvimento
    }
}

//dependências (para instalar pacotes necessários para o projeto)
//devDependencies (para instalar pacotes necessários apenas para desenvolvimento)

// ^ (permite atualizações que não quebram compatibilidade, ou seja, atualizações de patch e minor
// ~ (permite apenas atualizações de patch, ou seja, correções de bugs)
// * (permite qualquer atualização, incluindo major, minor e patch)
//major (atualizações que quebram compatibilidade) 
//minor (atualizações com novas funcionalidades, mas compatíveis)
//patch (atualizações de correção de bugs, sem novas funcionalidades)


