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