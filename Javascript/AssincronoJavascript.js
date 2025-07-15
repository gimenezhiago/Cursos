//Promises
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { // Cria uma nova Promise
        setTimeout(() => { // Executa uma função após um tempo
            if (typeof msg !== 'string') {
                reject('Erro: Mensagem deve ser uma string') // Rejeita a Promise se a mensagem não for uma string
            }
            resolve(msg) // Resolve a Promise
        }, tempo * 1000)
    })
}
esperaAi('Frase 1', 3)
    .then(resposta => { // Chama a função esperaAi e aguarda a resolução da Promise
        console.log(resposta) // Exibe a resposta da Promise
        return esperaAi('Frase 2', 2) // Retorna uma nova Promise
    }) 
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 3', 1) // Retorna uma nova Promise
    })
    .then(resposta => {
        console.log(resposta) // Exibe a resposta da Promise
    })
    .then(() => {
        console.log('Terminou')
    })
    .catch(e => {
        console.log('Erro:', e) // Exibe o erro se a Promise for rejeitada
    }) // Chama a função esperaAi e aguarda a rejeição da Promise

//Promise.all (mostra o resultado de todas as Promises)
const promises = ['Primeiro valor',
     esperaAi('Promise 1', 5),
     esperaAi('Promise 2', 2),
     'Outro valor'
]
Promise.all(promises) // Aguarda todas as Promises serem resolvidas
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro) // Exibe o erro se alguma Promise for rejeitada
    })

//Promise.race (mostra o resultado da primeira Promise resolvida)
Promise.race(promises) // Aguarda a primeira Promise ser resolvida
    .then(function(valor) {
        console.log(valor) // Exibe o valor da primeira Promise resolvida
    })
    .catch(function(erro) {
        console.log(erro) // Exibe o erro se alguma Promise for rejeitada
    })

//Promise.resolve (resolve uma Promise com um valor)
function funcao() {
    const emCache = true
    if (emCache) {
        return Promise.resolve('Valor em cache') // Retorna uma Promise resolvida com o valor em cache
    } else {
        return esperaAi('Valor em cache', 2) // Retorna uma Promise que aguarda o valor em cache
    }
}
funcao()
    .then(function(valor) {
        console.log(valor) // Exibe o valor em cache
    })
    .catch(function(erro) {
        console.log(erro) // Exibe o erro se a Promise for rejeitada
    })

//Promise.reject (rejeita uma Promise com um erro)
function funcao2() {
    const emCache = false
    if (emCache) {
        return Promise.reject('Valor em cache') // Retorna uma Promise resolvida com o valor em cache
    } else {
        return esperaAi('Valor em cache', 4) // Retorna uma Promise rejeitada com um erro
    }
}
funcao2()
    .then(function(valor) {
        console.log(valor) // Exibe o valor em cache
    })
    .catch(function(erro) {
        console.log(erro) // Exibe o erro se a Promise for rejeitada
    })

//Async/Await (simplifica o uso de Promises)
async function executa() { // Declara uma função assíncrona
    try { // Tenta executar o código dentro do bloco try
        const fase1 = await esperaAi('fase 1', 3) // Aguarda a resolução da Promise
        console.log(fase1) // Exibe a resposta da Promise
        const fase2 = await esperaAi('fase 2', 2)
        console.log(fase2) // Exibe a resposta da Promise
        const fase3 = await esperaAi('fase 3', 1)
        console.log(fase3) // Exibe a resposta da Promise
    } catch (e) {
        console.log(e) // Exibe o erro se a Promise for rejeitada
    }
}
executa()

//Estados da Promise
/*
Pending (pendente): A Promise está em andamento e ainda não foi resolvida ou rejeitada.
fulfilled (cumprida): A Promise foi resolvida com sucesso.
rejected (rejeitada): A Promise foi rejeitada com um erro.
*/

//XMLHttpRequest (XHR) (API para fazer requisições HTTP)
const request = (obj) => { // Declara uma função que faz uma requisição HTTP
    const xhr = new XMLHttpRequest() // Cria um novo objeto XMLHttpRequest
    xhr.open(obj.method, obj.url, true) // Abre uma nova requisição com o método e URL especificados
    xhr.send() // Envia a requisição

    xhr.addEventListener('load', () => { // Adiciona um evento para quando a requisição for concluída
        if (xhr.status >= 200 && xhr.status < 300) { // Verifica se o status da resposta é 2xx
            obj.success(xhr.responseText) // Chama a função de sucesso com a resposta da requisição
        } else {
            obj.error(xhr.statusText) // Chama a função de erro com o status da resposta
        }
    })
}

//XMLHttpRequest (XHR) com Promises
const request2 = (obj) => { // Declara uma função que faz uma requisição HTTP
    return new Promise((resolve, reject) => { // Cria uma nova Promise
        const xhr = new XMLHttpRequest() // Cria um novo objeto XMLHttpRequest
        xhr.open(obj.method, obj.url, true) // Abre uma nova requisição com o método e URL especificados
        xhr.send() // Envia a requisição

        xhr.addEventListener('load', () => { // Adiciona um evento para quando a requisição for concluída
            if (xhr.status >= 200 && xhr.status < 300) { // Verifica se o status da resposta é 2xx
                resolve(xhr.responseText) // Resolve a Promise com a resposta da requisição
            } else {
                reject(xhr.statusText) // Rejeita a Promise com o status da resposta
            }
        })
    })
}

//fetch (API moderna para fazer requisições HTTP)
fetch('pagina1.html') // Faz uma requisição para a URL especificada
    .then((response) => {
        if (response.status !== 200) { // Verifica se o status da resposta é 200 (OK)
            throw new Error('Erro na requisição') // Lança um erro se a resposta não for OK
        }
        return response.text() // Retorna o corpo da resposta como texto
    })
    .then((html) => {
        console.log(html) // Exibe o corpo da resposta
    })
    .catch((error) => {
        console.error('Erro:', error) // Exibe o erro se a requisição falhar
    })

//Colocar axios no projeto
// tag script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"

//axios (biblioteca para fazer requisições HTTP)
axios('https://jsonplaceholder.typicode.com/posts') // Faz uma requisição para a URL especificada
    .then((response) => {
        console.log(response.data) // Exibe os dados da resposta
    })
    .catch((error) => {
        console.error('Erro:', error) // Exibe o erro se a requisição falhar
    })

//exportando módulos
export { nome, sobrenome, idade as age, soma } // Exporta as variáveis e funções para serem usadas em outros módulos
import { nome as name, sobrenome, age, soma } from './modulo1.js' // Importa as variáveis e funções do módulo especificado

export const lindo = 'Sim' // Exporta uma constante chamada lindo
import { lindo } from './modulo1.js' // Importa a constante lindo do módulo especificado

import * as MeuModulo from './modulo1.js' // Importa todas as variáveis e funções do módulo como um objeto
console.log(MeuModulo.nome) // Exibe o valor da variável nome do módulo

export default fazTudo // Exporta a função fazTudo como o export padrão do módulo
import fazTudo from './modulo1'// Importa a função fazTudo do módulo especificado

import fazTudo, { nome as name, sobrenome, idade } from './modulo1.js' // Importa a função fazTudo está em default e as variáveis do módulo especificado



